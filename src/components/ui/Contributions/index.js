import React from 'react';
import Contribution from './Contribution';
import PropTypes from 'prop-types';

import SectionWrapper from '../../hoc/SectionWrapper';

const Contributions = ({ data }) => {
  return (
    <SectionWrapper title="Open-Source contributions">
      <ul>
        {data.map(contribution => (
          <Contribution contribution={contribution} key={contribution.id} />
        ))}
      </ul>
    </SectionWrapper>
  )
};

Contributions.propTypes = {
  data: PropTypes.array.isRequired
};

export default Contributions;