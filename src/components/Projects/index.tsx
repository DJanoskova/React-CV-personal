import React, { FunctionComponent } from 'react';
import Project from './Project';

import SectionWrapper from '../hoc/SectionWrapper';
import { ProjectType } from '../../types/cv';

type IProps = {
  data: ProjectType[];
};

const Projects: FunctionComponent<IProps> = ({ data }) => {
  return (
    <SectionWrapper title="Public sole-owned projects">
      {data.map((project) => (
        <Project project={project} key={project.name} />
      ))}
    </SectionWrapper>
  );
};

export default Projects;
