import React, { useState } from 'react';
import Desktop from '../Responsive/Responsive';
import MainButton from '../Buttons/MainButton';
import DetailsCard from '../DetailsCard/DetailsCard';

const RepositoriesList = ({ data }) => {
  const { edges } = data.search;

  const [showDetails, setShowDetails] = useState(false);

  const handleClick = i => {
    setShowDetails(i);
  };

  const tableRow = edges.map((repo, i) => {
    console.log(repo);
    return (
      <tr key={i}>
        <Desktop>
          <td>{i + 1}.</td>
          <td>{repo.node.owner.login}</td>
        </Desktop>
        <td>{repo.node.name}</td>
        <td>
          <MainButton type="button" onClick={() => handleClick(i)}>
            Details
          </MainButton>
        </td>
      </tr>
    );
  });

  if (!showDetails) {
    return (
      <table className="RepositoriesList__table">
        <thead>
          <tr>
            <Desktop>
              <th />
              <th>Owner</th>
            </Desktop>
            <th>Project name</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>{tableRow}</tbody>
      </table>
    );
  }
  return (
    <DetailsCard
      onClick={value => setShowDetails(value)}
      showDetails={showDetails}
      edges={edges}
    />
  );
};

export default RepositoriesList;
