import React, { FunctionComponent } from 'react';
import format from 'date-fns/format';

import { WorkType } from '../../types/cv';

import Card from '../ui/Card';
import Tag from '../ui/Tag';

type IProps = {
  work: WorkType;
};

const Work: FunctionComponent<IProps> = ({ work }) => {
  const dateFormat = 'MMM yyyy';
  const project = work.project;
  const technologies: string[] = JSON.parse(project.technologies);
  const start = format(new Date(project.beginAt), dateFormat);
  const end = project.endedAt ? format(new Date(project.endedAt), dateFormat) : 'Current';

  return (
    <Card>
      <strong className="mb-2">{work.name}</strong>
      <table className="w-full">
        <tbody>
          <tr>
            <td className="text-gray-400">{project.position}</td>
            <td className="text-right text-gray-400">
              {start} - {end}
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="py-2 whitespace-pre-line">
              {project.description}
            </td>
          </tr>
          <tr className="work-technologies">
            <td colSpan={2}>
              <div className="badge-group">
                {technologies.map((technology) => (
                  <Tag key={technology}>{technology}</Tag>
                ))}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </Card>
  );
};

export default Work;
