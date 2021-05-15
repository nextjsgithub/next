import React from 'react';
import MainButton from '../Buttons/MainButton'

const DetailsCard = ({ onClick, showDetails, edges }) => {
  return (
    <div key={showDetails} style={{ display: 'flex', flexDirection: 'column' }}>
      <div>
        {showDetails + 1}. Project name: {edges[showDetails].node.name}
      </div>
      <div style={{ padding: '0 0 0 20px' }}>
        Owner: {edges[showDetails].node.owner.login}
      </div>
      <div style={{ padding: '0 0 0 20px' }}>
        Link:{' '}
        <MainButton type="button" onClick={() => onClick(false)}>
          Back to list
        </MainButton>
      </div>
    </div>
  );
};

export default DetailsCard;
