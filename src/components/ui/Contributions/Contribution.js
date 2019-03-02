import React from 'react';
import PropTypes from 'prop-types';

const Contribution = ({ contribution }) => {
  return (
    <div className="card small">
      <a href={contribution.url} target="_blank" rel="noopener noreferrer">
        {contribution.name}
      </a>
      <p className="text-muted">
        {contribution.description}
      </p>
    </div>
  )
};

Contribution.propTypes = {
  contribution: PropTypes.object.isRequired
};

export default Contribution;