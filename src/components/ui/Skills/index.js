import React from 'react';
import PropTypes from 'prop-types';

import SectionWrapper from '../../hoc/SectionWrapper';
import Skill from './Skill';

const Skills = ({ data }) => {
  return (
    <SectionWrapper title="Skills">
      <div className="badge-group">
        {data.map(skill => <Skill skill={skill} key={skill.id} />)}
      </div>
    </SectionWrapper>
  )
};

Skills.propTypes = {
  data: PropTypes.array.isRequired
};

export default Skills