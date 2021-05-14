import React, { useState } from 'react';

const RepositoriesList = ({ data }) => {
  const { edges } = data.search;

  const [showDetails, setShowDetails] = useState(false);

  const handleClick = i => {
    console.log(i);
    setShowDetails(i);
  };

  if (!showDetails) {
    return edges.map((repo, i) => {
      console.log(repo);
      return (
        <div key={i} style={{ display: 'flex', flexDirection: 'column' }}>
          <div>
            {i + 1}. Project name: {repo.node.name}
          </div>
          <div style={{ padding: '0 0 0 20px' }}>
            Owner: {repo.node.owner.login}
          </div>
          <div style={{ padding: '0 0 0 20px' }}>
            Link: <button onClick={() => handleClick(i)}>Details</button>
          </div>
        </div>
      );
    });
  } else {
    return (
      <div
        key={showDetails}
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <div>
          {showDetails + 1}. Project name: {edges[showDetails].node.name}
        </div>
        <div style={{ padding: '0 0 0 20px' }}>
          Owner: {edges[showDetails].node.owner.login}
        </div>
        <div style={{ padding: '0 0 0 20px' }}>
          Link:{' '}
          <button onClick={() => setShowDetails(false)}>Back to list</button>
        </div>
      </div>
    );
  }
}

export default RepositoriesList;
