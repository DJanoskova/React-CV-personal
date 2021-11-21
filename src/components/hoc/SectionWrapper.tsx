import React, { FunctionComponent, ReactNode } from 'react';

type IProps = {
  title: string;
  children: ReactNode;
  className?: string;
};

const SectionWrapper: FunctionComponent<IProps> = ({ title, children, className }) => {
  return (
    <div className={`mb-4 ${className}`}>
      <h3 className="font-black text-base">{title}</h3>
      {children}
    </div>
  );
};

export default SectionWrapper;
