import React, { Component } from 'react';
import './Home.css';
import HomeSearchBar from './components/Home-Search-Bar.js';
import HomeUserMeta from './components/Home-User-Meta.js';
import HomeStats from './components/Home-Stats.js';
import ApiService from './services/api';

class AppHome extends Component {
  render() {
    return (
      <div className="Home">
        <div className="Home-container">
          <HomeSearchBar></HomeSearchBar>
          <div className="Home-Row-1 row">
            <HomeUserMeta></HomeUserMeta>
            <HomeStats></HomeStats>
          </div>
        </div>
      </div>
    );
  }
}

export default AppHome;
