import React, { Component } from 'react';
import logo from './assets/github-logo.png';
import './Home.css';
import HomeSearchBar from './components/Home-Search-Bar.js';

class AppHome extends Component {
  render() {
    return (
      <div className="Home">
        <header className="Home-header">
          <div>
            <span>Integrated with </span><img src={logo} className="Home-header-logo" alt="logo" />
          </div>
          <h1 className="Home-header-title">Github Profile Summary</h1>
        </header>
        <div className="Home-container">
          <HomeSearchBar></HomeSearchBar>
        </div>
      </div>
    );
  }
}

export default AppHome;
