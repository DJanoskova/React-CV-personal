import React, { useState, useEffect } from 'react';

import { GET_CV } from "../actions/cv";

import { Work, Skills, Languages } from './ui'
import Loading from './ui/Loading'
import About from "./ui/About";

const App = () => {
  const [cv, setCv] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await GET_CV();
      setCv(data);
    };

    fetchData();
  }, []);

  const handlePrint = () => window.print();

  if (!cv) return <Loading />;

  const { about, projects, languages, skills, contributions, works } = cv;

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-md-4">
          <About
            about={about}
            projects={projects}
            languages={languages}
            contributions={contributions}
          />
        </div>

        <div className="col-12 col-md-8">
          <div className="content">
            <h1>Dana Janoskova</h1>

            <Skills data={skills} />
            <Work data={works} />
            <div className="row">
              <div className="col-16 col-md-6">
                <Languages data={languages} />
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="content text-center noprint">
        2018-2019 - Dana Janoskova
        <br />
        Made with React and AdonisJs
        <br />
        <button type="button" onClick={handlePrint} className="link">
          Print
        </button>
      </div>
    </div>
  );
};

export default App;
