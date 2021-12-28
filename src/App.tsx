import React from 'react';

import { CVType } from './types/cv';

import Works from './components/Works';
// import Skills from './components/Skills';
import About from './components/About';
import Workshops from './components/Workshops';

import cvData from './data.json';

const App = () => {
  const handlePrint = () => window.print();

  const { about, projects, contributions, works, workshops } = cvData as CVType;

  return (
    <div className="max-w-screen-lg m-auto py-6 px-4 lg:px-0">
      <div className="block lg:flex container">
        <div className="mr-0 lg:mr-8 w-full lg:w-80 flex-shrink-0 aside">
          <About about={about} projects={projects} contributions={contributions} />
        </div>

        <div className="content">
          <Works data={works} />
          <Workshops data={workshops} />
        </div>
      </div>
      {/*<Skills data={skills} />*/}
      <div className="content text-center noprint text-gray-400">
        2021 - Dana Janoskova
        <br />
        Made with React and Tailwind
        <br />
        <a href="#" onClick={handlePrint}>
          Print
        </a>
      </div>
    </div>
  );
};

export default App;
