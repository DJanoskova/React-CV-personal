import React, { FunctionComponent } from 'react';

import { WorkType } from '../../types/cv';

import SectionWrapper from '../hoc/SectionWrapper';
import Work from './Work';

type IProps = {
  data: WorkType[];
};

const Works: FunctionComponent<IProps> = ({ data }) => {
  return (
    <SectionWrapper title="Workplaces and positions">
      {data.map((work) => (
        <Work work={work} key={work.name} />
      ))}
    </SectionWrapper>
  );
};

export default Works;
