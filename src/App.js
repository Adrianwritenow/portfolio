import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Info from "./components/info";
import Splash from "./components/splash";
import Skills from "./components/skills";
import Contact from "./components/contact";
import Experience from "./components/experience";
import BaseLayout from "./components/baselayout";

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <BaseLayout>
            <Route exact path="/" component={Info}/>
            <Route exact path="/experience" component={Experience}/>
          </BaseLayout>
        </Switch>
    </BrowserRouter>
    );
  }
}

export default App;
