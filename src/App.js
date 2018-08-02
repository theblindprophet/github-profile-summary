import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Home from './Home.js';
import logo from './assets/github-logo.png';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faStroopwafel, faCode } from '@fortawesome/free-solid-svg-icons';
library.add(faStroopwafel, faCode);

class App extends Component {
  render() {
    return (
      <div className="App-wrapper">
        <header className="App-header">
          <div>
            <span>Integrated with </span><img src={logo} className="App-header-logo" alt="logo" />
          </div>
          <h1 className="App-header-title">Github Profile Summary</h1>
        </header>
        <div className="App-container">
          <Router>
            <Route exact path="/" component={Home} />
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
