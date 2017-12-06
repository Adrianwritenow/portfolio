import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <section className="one">
          <div className="wrapper"></div>
        </section>

        <section className="two">
          <div className="wrapper"></div>
        </section>

        <section className="three">
          <div className="wrapper"></div>
        </section>

          <section className="four">
          <div className="flex-center">

            <i className="fa fa-github fa-4x icon-3d"></i>
            <i className="fa fa-linkedin-square fa-4x icon-3d"></i>
            <i className="fa fa-tumblr fa-4x icon-3d"></i>
            <i className="fa fa-spotify fa-4x icon-3d"></i>

        </div>

        </section>



      </div>
    );
  }
}

export default App;
