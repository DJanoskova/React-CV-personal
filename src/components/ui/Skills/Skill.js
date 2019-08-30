import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Skill = ({ skill }) => {
  const { x0, x1, y0, y1, value } = skill;
  const width = x1 - x0;
  const height = y1 - y0;

  const ratio = width / height;
  const highlight = value >= 50;
  const fontSize = value / 3.5 + 7;

  const classes = classNames('d3-child', { highlight, rotate: ratio < 0.7 });

  return (
    <div className={classes} style={{ top: y0, left: x0, width, height, fontSize }}>
      {skill.data.content}
    </div>
  )
};

Skill.propTypes = {
  skill: PropTypes.object.isRequired
};

export default Skill