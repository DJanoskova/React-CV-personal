import React, { FunctionComponent } from 'react';

const Card: FunctionComponent = ({ children }) => {
  return <div className="p-4 shadow-lg mb-4 rounded-lg">{children}</div>;
};

export default Card;
