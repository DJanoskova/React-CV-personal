import React, { FunctionComponent } from 'react';

import { ContributonType } from '../../types/cv';

interface IProps {
  contribution: ContributonType;
}

const Contribution: FunctionComponent<IProps> = ({ contribution }) => {
  return (
    <li className="mb-2">
      <a href={contribution.url} target="_blank" rel="noopener noreferrer">
        {contribution.name}
      </a>{' '}
      - <span className="text-gray-400">{contribution.source}</span>
      <p>{contribution.description}</p>
    </li>
  );
};

export default Contribution;
