import React, { FunctionComponent } from 'react';
import orderBy from 'lodash/orderBy';

import { SkillType } from '../../types/cv';

import SectionWrapper from '../hoc/SectionWrapper';
import Skill from './Skill';

type IProps = {
  data: SkillType[];
};

const getOrderedSkills = (data: SkillType[]) => {
  return orderBy(data, ['value'], ['desc']);
};

const Skills: FunctionComponent<IProps> = ({ data }) => {
  const skills = getOrderedSkills(data);

  return (
    <SectionWrapper title="Relevant skills" className="overflow-x-auto">
      <div className="h-36 flex items-end mt-2" style={{ minWidth: '500px' }}>
        {skills.map((skill) => (
          <Skill key={skill.content} skill={skill} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;
