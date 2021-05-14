import React from 'react';
import SearchButton from '../Buttons/SearchButton';

const SearchBar = ({ onClick }) => {
  return (
    <div className="SearchBar__wrapper">
      <input className="SearchBar__input" type="text" id="repoName" placeholder="Type repositories name..." />
      <div className="SearchBar__btnWrapper">
        <SearchButton onClick={() => onClick(10)} type="button">
          Get 10 repositories
        </SearchButton>
        <SearchButton onClick={() => onClick(20)} type="button">
          Get 20 repositories
        </SearchButton>
        <SearchButton onClick={() => onClick(100)} type="button">
          Get 100 repositories
        </SearchButton>
      </div>
    </div>
  );
};

export default SearchBar;
