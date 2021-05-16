import { signIn, signOut, useSession } from 'next-auth/client';
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  ApolloProvider
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import MainButton from '../components/Buttons/MainButton';
import RepositoriesView from '../components/RepositoriesView';

const httpLink = createHttpLink({
  uri: 'https://api.github.com/graphql'
});

const authLink = setContext((_, { headers }) => {
  const token = process.env.NEXT_PUBLIC_BEARER;
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

const Home = () => {
  const [session, loading] = useSession();

  return (
    <div className="Main__wrapper">
      {!session && (
        <div className="Header__wrapper">
          <div className="Header__content">
            <div className="Header__info">You are not signed in</div>
            <MainButton type="button" onClick={() => signIn()}>
              Sign in
            </MainButton>
          </div>
        </div>
      )}
      {session && (
        <>
          <div className="Header__wrapper">
            <div className="Header__content">
              <div className="Header__info">
                You are signed in as {session.user.name}
              </div>
              <MainButton type="button" onClick={() => signOut()}>
                Sign out
              </MainButton>
            </div>
          </div>
          <ApolloProvider client={client}>
            <RepositoriesView />
          </ApolloProvider>
        </>
      )}
    </div>
  );
};

export default Home;
