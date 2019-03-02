import React from 'react';
import PropTypes from 'prop-types';

const Skill = ({ skill }) => <span className="badge badge-primary">{skill.name}</span>;

Skill.propTypes = {
  skill: PropTypes.object.isRequired
};

export default Skill