import '../styles/globals.css';
import { Provider } from 'next-auth/client';
import './scss/app.scss';

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
  );
}
