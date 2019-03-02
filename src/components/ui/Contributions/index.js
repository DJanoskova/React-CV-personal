import React from 'react';
import Contribution from './Contribution';
import PropTypes from 'prop-types';

import SectionWrapper from '../../hoc/SectionWrapper';

const Contributions = ({ data }) => {
  return (
    <SectionWrapper title="Open-Source contributions">
      <div className="form-row">
        {data.map(contribution => (
          <div className="col-12 col-md-4" key={contribution.id}>
            <Contribution contribution={contribution} />
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
};

Contributions.propTypes = {
  data: PropTypes.array.isRequired
};

export default Contributions;