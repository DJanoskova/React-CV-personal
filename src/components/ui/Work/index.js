import React from 'react';
import PropTypes from 'prop-types';

import SectionWrapper from '../../hoc/SectionWrapper';
import Work from './Works';

const Works = ({ data }) => {
  return (
    <SectionWrapper title="Workplaces and positions">
      {data.map(work => <Work work={work} key={work.id} />)}
    </SectionWrapper>
  )
};

Works.propTypes = {
  data: PropTypes.array.isRequired
};

export default Works