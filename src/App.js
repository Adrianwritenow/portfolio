import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Info from "./components/info";
import Splash from "./components/splash";
import Experience from "./components/experience";
import Skills from "./components/skills";
import About from "./components/about";
import Contact from "./components/contact";

import BaseLayout from "./components/baselayout";

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <BaseLayout>
            <Route exact path="/" component={Splash}/>
            <Route exact path="/info" component={Info}/>
            <Route exact path="/experience" component={Experience}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/skills" component={Skills}/>




          </BaseLayout>
        </Switch>
    </BrowserRouter>
    );
  }
}

export default App;
