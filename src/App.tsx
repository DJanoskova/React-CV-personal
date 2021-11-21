import React, { useState, useEffect } from 'react';

import { GET_CV } from './actions/cv';
import { CVType } from './types/cv';

import Work from './components/Work';
import Skills from './components/Skills';
import Languages from './components/Languages';
import Loading from './components/Loading';
import About from './components/About';

const App = () => {
  const [cv, setCv] = useState<CVType | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await GET_CV();
      setCv(data);
    };

    fetchData();
  }, []);

  // const handlePrint = () => window.print();

  if (!cv) return <Loading />;

  const { about, projects, languages, skills, contributions, works } = cv;

  return (
    <div className="max-w-screen-lg m-auto py-6">
      <div className="block lg:flex">
        <div className="mr-0 lg:mr-8 w-full lg:w-80 flex-shrink-0">
          <About about={about} projects={projects} contributions={contributions} />
          <Languages data={languages} />
        </div>

        <div className="">
          <Work data={works} />
          <Skills data={skills} />
        </div>
      </div>
      <div className="content text-center noprint text-gray-400">
        2021 - Dana Janoskova
        <br />
        Made with React, Tailwind and AdonisJs
      </div>
    </div>
  );
};

export default App;
