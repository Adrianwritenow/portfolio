import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Info from "./components/info";
import Splash from "./components/splash";

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Splash}/>
          <Route exact path="/info" component={Info}/>
        </Switch>
    </BrowserRouter>
    );
  }
}

export default App;
