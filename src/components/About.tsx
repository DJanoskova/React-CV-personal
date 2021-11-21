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
      <SectionWrapper title="Links">
        <a href="http://danajanoskova.sk" target="_blank" rel="noreferrer">
          danajanoskova.sk
        </a>
        <br />
        <a href="https://github.com/DJanoskova" target="_blank" rel="noreferrer">
          github.com/DJanoskova
        </a>
        <br />
        <a href="https://www.linkedin.com/in/dana-janoskova/" target="_blank" rel="noreferrer">
          www.linkedin.com/in/dana-janoskova/
        </a>
        <br />
        <a href="https://medium.com/@danajanoskova" target="_blank" rel="noreferrer">
          medium.com/@danajanoskova
        </a>
      </SectionWrapper>
      <Projects data={projects} />
      <Contributions data={contributions} />
    </>
  );
};

export default About;
