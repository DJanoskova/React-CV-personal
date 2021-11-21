import React, { FunctionComponent, ReactNode } from 'react';

type IProps = {
  title: string;
  children: ReactNode;
};

const SectionWrapper: FunctionComponent<IProps> = ({ title, children }) => {
  return (
    <div className="mb-4">
      <h3 className="font-black text-base">{title}</h3>
      {children}
    </div>
  );
};

export default SectionWrapper;
