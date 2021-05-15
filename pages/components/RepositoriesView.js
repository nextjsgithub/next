import React, { useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import gql from 'graphql-tag';
import RepositoriesList from './RepositoriesList/RepositoriesList';
import SearchBar from './SearchBar/SearchBar';

const RepositoriesView = () => {
  const [repoName, setRepoName] = useState('');
  const [repoNumber, setRepoNumber] = useState(10);

  const GET_REPO = gql`
    query ($repoName: String!, $repoNumber: Int) {
      search(query: $repoName, type: REPOSITORY, first: $repoNumber) {
        edges {
          node {
            ... on Repository {
              id
              name
              description
              url
              commitComments(last: 4) {
                nodes {
                  author {
                    login
                  }
                  commit {
                    message
                  }
                }
              }
              owner {
                login
              }
            }
          }
        }
      }
    }
  `;

  const [getRepo, { called, loading, data }] = useLazyQuery(GET_REPO, {
    variables: { repoName, repoNumber }
  });

  const handleGetRepoButton = number => {
    setRepoName(document.getElementById('repoName').value);
    setRepoNumber(number);
    getRepo();
  };

  if (called && loading)
    return <div className="SearchBar__spinner">Loading...</div>;

  return (
    <>
      <SearchBar onClick={number => handleGetRepoButton(number)} />
      {data && <RepositoriesList data={data} />}
    </>
  );
};

export default RepositoriesView;
