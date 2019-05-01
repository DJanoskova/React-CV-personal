import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Skill = ({ skill }) => {
  const { x0, x1, y0, y1, data } = skill;
  const width = x1 - x0 + 'px';
  const height = y1 - y0 + 'px';

  const classes = classNames('d3-child', { highlight: data.highlight });

  return (
    <div className={classes} style={{ top: y0, left: x0, width, height }}>
      {skill.data.name}
    </div>
  )
};

Skill.propTypes = {
  skill: PropTypes.object.isRequired
};

export default Skill