import React from 'react';
import Project from './Project';
import PropTypes from 'prop-types';

import SectionWrapper from "../../hoc/SectionWrapper";

const Projects = ({ data }) => {
  return (
    <SectionWrapper title="Public projects">
      {data.map(project => <Project project={project} key={project.id} />)}
    </SectionWrapper>
  )
};

Projects.propTypes = {
  data: PropTypes.array.isRequired
};

export default Projects