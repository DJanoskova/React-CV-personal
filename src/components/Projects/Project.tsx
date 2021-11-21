import React, { FunctionComponent } from 'react';
import { ProjectType } from '../../types/cv';

type IProps = {
  project: ProjectType;
};

const Project: FunctionComponent<IProps> = ({ project }) => {
  return (
    <div className="mb-4">
      <a
        href={`https://${project.name}`}
        target="_blank"
        rel="noopener noreferrer"
        className="block font-bold"
      >
        {project.name}
      </a>
      <em>{project.type}</em>
      <p className="text-gray-400 mb-2">{project.technologies}</p>
      <p>{project.summary}</p>
    </div>
  );
};

export default Project;
