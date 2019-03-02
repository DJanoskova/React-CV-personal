import React from 'react'
import moment from 'moment'
import PropTypes from 'prop-types';

import orderBy from 'lodash/orderBy';

const Work = ({ work }) => {
  const renderWorkProjects = () => {
    const projects = orderBy(work.projects, ['id'], ['desc']);

    return projects.map(project => {
      const technologies = JSON.parse(project.technologies);
      const start = moment(project.beginAt).format('MMMM YYYY');
      const end = project.endedAt ? moment(project.endedAt).format('MMMM YYYY') : 'Current';

      return (
        <div key={project.id} className="work-project card">
          <table>
            <tbody>
            <tr>
              <td>
                {project.position} - {project.role}
              </td>
              <td className="text-right text-muted small">
                {start} - {end}
              </td>
            </tr>
            <tr>
              <td colSpan="2" className="text-muted" style={{ padding: '5px 0' }}>
                {project.description}
              </td>
            </tr>
            <tr className="work-technologies">
              <td colSpan="2">
                <div className="badge-group">
                  {technologies.map(technology => (
                    <span className="badge badge-info" key={technology}>{technology}</span>
                  ))}
                </div>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      );
    })
  };

  return (
    <div className="work">
      <strong>{work.name}</strong>
      <div>
        {renderWorkProjects()}
      </div>
    </div>
  )
};

Work.propTypes = {
  work: PropTypes.object.isRequired
};

export default Work