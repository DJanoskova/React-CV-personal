import React, { FunctionComponent } from 'react';
import Project from './Project';

import SectionWrapper from '../hoc/SectionWrapper';
import { ProjectType } from '../../types/cv';

type IProps = {
  data: ProjectType[];
};

const Projects: FunctionComponent<IProps> = ({ data }) => {
  return (
    <SectionWrapper title="Public projects">
      {data.map((project) => (
        <Project project={project} key={project.id} />
      ))}
    </SectionWrapper>
  );
};

export default Projects;
