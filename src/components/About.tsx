import React, { FunctionComponent } from 'react';

import photo from '../assets/img/photo.jpeg';
import { ContributonType, ProjectType } from '../types/cv';

import SectionWrapper from './hoc/SectionWrapper';
import Projects from './Projects';
import Contributions from './Contributions';

type IProps = {
  about: string;
  projects: ProjectType[];
  contributions: ContributonType[];
};

const About: FunctionComponent<IProps> = ({ about, projects, contributions }) => {
  return (
    <>
      <img
        src={photo}
        className="avatar rounded-full m-auto mb-4 w-52 shadow-lg"
        alt="Dana Janoskova"
      />
      <div className="mb-4">{about}</div>
      <SectionWrapper title="Social">
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
