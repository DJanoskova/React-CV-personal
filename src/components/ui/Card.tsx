import React, { FunctionComponent } from 'react';

type IProps = {
  className?: string;
};

const Card: FunctionComponent<IProps> = ({ children, className }) => {
  return <div className={`p-4 shadow-lg mb-4 rounded-lg ${className || ''}`}>{children}</div>;
};

export default Card;
