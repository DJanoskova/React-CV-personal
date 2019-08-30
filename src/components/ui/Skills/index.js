import React from 'react';
import PropTypes from 'prop-types';
import shuffle from 'lodash/shuffle';

import SectionWrapper from '../../hoc/SectionWrapper';
import Skill from './Skill';

import { generateTreemap } from "../../../utils/data";

const Skills = ({ data }) => {
  const treemap = {
    name: '',
    value: 1,
    children: shuffle(data)
  }

  const skills = generateTreemap(treemap);

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