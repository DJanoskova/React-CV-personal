import React from 'react';
import PropTypes from 'prop-types';

const Project = ({project}) => {
  return (
    <div>
      <strong>{project.name}</strong>
      <em>{project.type}</em>
      <p className="text-muted">
        {project.technologies}
      </p>
      <p>
        {project.summary}
      </p>
    </div>
  )
};

Project.propTypes = {
  project: PropTypes.object.isRequired
};

export default Project