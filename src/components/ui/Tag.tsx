import React, { FunctionComponent } from 'react';

const Tag: FunctionComponent = ({ children }) => {
  return (
    <span className="bg-primary-100 text-primary-600 mr-1 last:mr-0 px-1 py-0.5 rounded-sm text-2xs inline-block mb-1">
      {children}
    </span>
  );
};

export default Tag;
