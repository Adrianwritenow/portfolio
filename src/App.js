import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="content">Adrian Rodriguez</div>

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
                <i className="fa fa-gitlab fa-4x icon-3d"></i>
                <i className="fa fa-bitbucket fa-4x icon-3d"></i>
                <i className="fa fa-git fa-4x icon-3d"></i>
            </div>

            <div className="flex-center">
              <i className="fa fa-twitter fa-4x icon-3d"></i>
              <i className="fa fa-facebook fa-4x icon-3d"></i>
              <i className="fa fa-instagram fa-4x icon-3d"></i>
              <i className="fa fa-whatsapp fa-4x icon-3d"></i>
            </div>
        </section>
      </div>
    );
  }
}

export default App;
