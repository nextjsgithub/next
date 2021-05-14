import React from 'react';

const SearchButton = ({ children, ...props }) => {
  return <button className="SearchBar__btn" {...props}>{children}</button>;
};

export default SearchButton;
