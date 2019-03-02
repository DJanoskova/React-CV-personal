import React, { Component } from 'react';

import { GET_CV } from "../actions/cv";

import photo from '../assets/img/photo.jpg';

import SectionWrapper from "./hoc/SectionWrapper";
import { Experience, Work, Skills, Projects, Languages, Contributions } from './ui'

class App extends Component {
  state = {
    cv: null
  };

  componentDidMount () {
    this.fetchData();
  }

  fetchData = async () => {
    const cv = await GET_CV();
    this.setState({ cv });
  };

  handlePrint = () => window.print();

  render () {
    const { cv } = this.state;
    if (!cv) return (
      <div className="loading">
        <span className="loading-text">This site is hosted on heroku.<br />Please be patient while it loads, it can take about 10 seconds.
        </span>
      </div>
    );

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-4">
            <div className="content">
              <img src={photo} className="avatar" alt="Dana Janoskova" />
              <p className="text-muted text-pre-line">
                {cv.about.about}
              </p>
              <SectionWrapper title="Contact">
                info@danajanoskova.sk
                <br />
                http://danajanoskova.sk
                <br />
                https://github.com/DJanoskova
              </SectionWrapper>
              <Projects data={cv.projects} />
            </div>
          </div>

          <div className="col-12 col-md-8">
            <div className="content">
              <h1>Dana Janoskova</h1>

              <Skills data={cv.skills} />
              <Work data={cv.works} />
              <Contributions data={cv.contributions} />

              <div className="row">
                <div className="col-12 col-sm-4">
                  <Languages data={cv.languages} />
                </div>
                <div className="col-12 col-sm-8">
                  <Experience data={cv.experience} />
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
          <button type="button" onClick={this.handlePrint} className="link">
            Print
          </button>
        </div>
      </div>
    );
  }
}

export default App;
