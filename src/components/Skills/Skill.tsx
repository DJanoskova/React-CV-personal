import React, { FunctionComponent } from 'react';

import { SkillType } from '../../types/cv';

type IProps = {
  skill: SkillType;
};

const Skill: FunctionComponent<IProps> = ({ skill }) => {
  const height = `${skill.value}%`;
  const isHighlight = skill.value >= 50;
  const background = isHighlight ? 'bg-primary-600 shadow-md' : 'bg-primary-100';
  const color = isHighlight ? 'text-white' : 'text-primary-600';

  return (
    <div className={`mr-1 lg:mr-2 last:mr-0 flex-1 relative h-full ${color}`}>
      <div className={`${background} absolute bottom-0 w-full rounded-md`} style={{ height }} />
      <div className="block text-rotate bottom-0 absolute py-1">{skill.content}</div>
    </div>
  );
};

export default Skill;
