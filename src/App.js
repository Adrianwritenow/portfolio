import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <section className="one">

          <div className="wrapper">
            <div className="content">
              <h1>Adrian Rodriguez</h1>
              <h4>Software Developer</h4>
            </div>
          </div>
        </section>

        <section className="two">
          <div className="wrapper">
          <div className="content">
            <h1>Experience</h1>
          </div>
          </div>
        </section>

        <section className="three">

          <div className="wrapper">
          <div className="content">
            <h1>Skills</h1>
          </div>
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
        </section>

          <section className="four">
          <div className="flex-center">

            <a href="https://github.com/Adrianwritenow"><i className="fa fa-github fa-4x icon-3d"></i></a>
            <a href="https://www.linkedin.com/in/adrian-rodriguez-3bb968129/"><i className="fa fa-linkedin-square fa-4x icon-3d"></i></a>
            <a href="https://www.tumblr.com/blog/adrianwritenow"><i className="fa fa-tumblr fa-4x icon-3d"></i></a>
            <a href="https://open.spotify.com/user/1262709064"><i className="fa fa-spotify fa-4x icon-3d"></i></a>

        </div>

        </section>



      </div>
    );
  }
}

export default App;
