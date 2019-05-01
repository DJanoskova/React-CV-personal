import React from 'react';
import PropTypes from 'prop-types';

import photo from '../../assets/img/photo.jpg';
import SectionWrapper from '../hoc/SectionWrapper';

import Projects from './Projects';
import Contributions from './Contributions';

const About = ({ about, projects, contributions }) => {
  return (
    <div className="content">
      <img src={photo} className="avatar" alt="Dana Janoskova" />
      <p className="text-muted text-pre-line">
        {about.about}
      </p>
      <SectionWrapper title="Contact">
        info@danajanoskova.sk
        <br />
        http://danajanoskova.sk
        <br />
        https://github.com/DJanoskova
        <br />
        https://medium.com/@info_53938
      </SectionWrapper>
      <Projects data={projects} />
      <Contributions data={contributions} />
    </div>
  )
};

About.propTypes = {
  about: PropTypes.object.isRequired,
  projects: PropTypes.array.isRequired,
  contributions: PropTypes.array.isRequired
};

export default About