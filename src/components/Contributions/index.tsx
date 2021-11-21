import React, { FunctionComponent } from 'react';

import { ContributonType } from '../../types/cv';

import Contribution from './Contribution';
import SectionWrapper from '../hoc/SectionWrapper';

type IProps = {
  data: ContributonType[];
};

const Contributions: FunctionComponent<IProps> = ({ data }) => {
  return (
    <SectionWrapper title="Open-Source works">
      <ul>
        {data.map((contribution) => (
          <Contribution contribution={contribution} key={contribution.name} />
        ))}
      </ul>
    </SectionWrapper>
  );
};

export default Contributions;
