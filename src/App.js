import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <section className="one">

          <div className="wrapper">
            <h1>FIRST PAGE</h1>
          </div>
        </section>

        <section className="two">
          <div className="wrapper">
            <h1>SECOND PAGE</h1>

          </div>
        </section>

        <section className="three">

          <div className="wrapper">
            <h1>THIRD PAGE</h1>

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
