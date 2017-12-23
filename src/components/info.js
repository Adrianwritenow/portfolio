import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

class Info extends Component {

  render() {
    return (
      <div className="App">

        <section className="one">

          <div className="wrapper">
            <div className="content">
              <h4>Adrian Rodriguez</h4>
              <h4>Software Developer</h4>
            </div>
          </div>
        </section>

        <section className="two">
          <div className="wrapper">
          <div className="content">
            <h4>Experience</h4>
          </div>
          </div>
        </section>

        <section className="three">

          <div className="wrapper">
          <div className="content">
            <h4>Skills</h4>
            <ul>
              <li>REACT</li>
              <li>JSX</li>
              <li>REDUX</li>
              <li>JAVASCRIPT</li>
              <li>NODE</li>
              <li>POSTGRESS</li>
              <li>MONGO</li>
              <li>EXPRESS</li>
              <li>CSS</li>
              <li>HTML</li>
              <li>JSON</li>
              <li>FINAL CUT PRO X</li>
              <li>GIT</li>
              <li>NPM</li>
              <li>JAVA</li>
            </ul>
          </div>


          </div>
        </section>

          <section className="four">
          
        </section>
      </div>
    );
  }
}

export default Info;
