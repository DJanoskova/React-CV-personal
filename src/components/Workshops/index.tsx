import React, { FunctionComponent } from 'react';

import { WorkshopType } from '../../types/cv';

import SectionWrapper from '../hoc/SectionWrapper';
import Workshop from './Workshop';

type IProps = {
  data: WorkshopType[];
};

const Workshops: FunctionComponent<IProps> = ({ data }) => {
  return (
    <SectionWrapper title="Presentations & workshops">
      <div className="block lg:flex">
        {data.map((workshop) => (
          <Workshop data={workshop} key={workshop.title} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Workshops;
