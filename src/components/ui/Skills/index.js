import React from 'react';
import PropTypes from 'prop-types';

import SectionWrapper from '../../hoc/SectionWrapper';
import Skill from './Skill';

import { generateTreemap } from "../../../utils/data";

const Skills = ({ data }) => {
  const skills = generateTreemap(data);

  return (
    <SectionWrapper title="Skills">
      <div className="d3-container">
        {skills.map(skill => (
          <Skill key={skill.data.id} skill={skill} />
        ))}
      </div>
    </SectionWrapper>
  )
};

Skills.propTypes = {
  data: PropTypes.array.isRequired
};

export default Skills