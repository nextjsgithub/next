import React from 'react';

const MainButton = ({ children, ...props }) => {
  return <button className="MainButton__Btn" {...props}>{children}</button>;
};

export default MainButton;
