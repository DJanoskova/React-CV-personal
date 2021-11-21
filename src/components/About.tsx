import React, { FunctionComponent } from 'react';

import photo from '../assets/img/photo.jpeg';
import { AboutType, ContributonType, ProjectType } from '../types/cv';

import SectionWrapper from './hoc/SectionWrapper';
import Projects from './Projects';
import Contributions from './Contributions';

type IProps = {
  about: AboutType;
  projects: ProjectType[];
  contributions: ContributonType[];
};

const About: FunctionComponent<IProps> = ({ about, projects, contributions }) => {
  return (
    <>
      <img src={photo} className="avatar rounded-full m-auto mb-4 w-52" alt="Dana Janoskova" />
      <div className="mb-4">{about.about}</div>
      <SectionWrapper title="Contact">
        http://danajanoskova.sk
        <br />
        https://github.com/DJanoskova
        <br />
        https://medium.com/@danajanoskova
      </SectionWrapper>
      <Projects data={projects} />
      <Contributions data={contributions} />
    </>
  );
};

export default About;
