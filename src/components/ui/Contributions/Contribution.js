import React from 'react';
import PropTypes from 'prop-types';

const Contribution = ({ contribution }) => {
  return (
    <li>
      <a href={contribution.url} target="_blank" rel="noopener noreferrer">
        {contribution.name}
      </a> - <span className="text-muted small">
        {contribution.source}
      </span>
      <p>
        {contribution.description}
      </p>
    </li>
  )
};

Contribution.propTypes = {
  contribution: PropTypes.object.isRequired
};

export default Contribution;