import React from 'react';
import PropTypes from 'prop-types';

import shuffle from 'lodash/shuffle';
import map from 'lodash/map';

import SectionWrapper from '../../hoc/SectionWrapper';

const Experience = ({data}) => {
  const experiences = shuffle(data);

  return (
    <SectionWrapper title="Experience">
      {map(experiences, 'name').join(', ')}
    </SectionWrapper>
  )
};

Experience.propTypes = {
  data: PropTypes.array.isRequired
};

export default Experience