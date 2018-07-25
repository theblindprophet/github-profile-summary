import React, { Component } from 'react';
import logo from './assets/github-logo.png';
import './App.css';
import AppSearchBar from './components/App-Search-Bar.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <span>Integrated with </span><img src={logo} className="App-header-logo" alt="logo" />
          </div>
          <h1 className="App-header-title">Github Profile Summary</h1>
        </header>
        <div className="App-container">
          <AppSearchBar></AppSearchBar>
        </div>
      </div>
    );
  }
}

export default App;
