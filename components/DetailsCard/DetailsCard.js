import React from 'react';
import MainButton from '../Buttons/MainButton';

const DetailsCard = ({ onClick, showDetails, edges }) => {
  let commitInfo;
  if (edges[showDetails].node.object) {
    commitInfo = edges[showDetails].node.object.history.edges.map(
      (commit, i) => {
        return (
          <div key={i} className="DetailsCard__textCommitsWrapper">
            <div>
              <span className="DetailsCard__textKey">Author login:</span>
              <span className="DetailsCard__textAuthor">
                {commit.node.author.name}
              </span>
            </div>
            <div className="DetailsCard__textKey">Commit message:</div>
            <div className="DetailsCard__commitText">{commit.node.message}</div>
          </div>
        );
      }
    );
  } else {
    commitInfo = [<div key={1}>No commits / no master branch</div>];
  }

  return (
    <div className="DetailsCard__wrapper">
      <div className="DetailsCard__textPairWrapper">
        <span className="DetailsCard__textKey">Project name:</span>
        <span className="DetailsCard__textValue">
          {edges[showDetails].node.name}
        </span>
      </div>
      <div className="DetailsCard__textPairWrapper">
        <span className="DetailsCard__textKey">Owner:</span>
        <span className="DetailsCard__textValue">
          {edges[showDetails].node.owner.login}
        </span>
      </div>
      <div className="DetailsCard__textDescriptionWrapper">
        <span className="DetailsCard__textKey">Link to clone repository:</span>
        <span className="DetailsCard__textValueUrl">
          {edges[showDetails].node.url}.git
        </span>
      </div>
      <div className="DetailsCard__textDescriptionWrapper">
        <span className="DetailsCard__textKey">Description:</span>
        <span className="DetailsCard__textDescription">
          {edges[showDetails].node.description}
        </span>
      </div>
      <div className="DetailsCard__textDescriptionWrapper">
        <span className="DetailsCard__textTitle">Last commits:</span>
        <span className="DetailsCard__textDescription">{commitInfo}</span>
      </div>
      <div className="DetailsCard__btnWrapper">
        <MainButton type="button" onClick={() => onClick('')}>
          Back to list
        </MainButton>
      </div>
    </div>
  );
};

export default DetailsCard;
