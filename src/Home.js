import React, { Component } from 'react';
import './Home.css';
import HomeSearchBar from './components/Home-Search-Bar.js';
import HomeUserMeta from './components/Home-User-Meta.js';
import HomeStats from './components/Home-Stats.js';
import HomeContributions from './components/Home-Contributions.js';
import HomeRepos from './components/Home-Repos.js';
import { getUserData } from './services/api';

class AppHome extends Component {

  getUserData = (username) => {
    getUserData(username)
      .then(userData => {
        console.log('userData', userData);
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className="Home">
        <div className="Home-container">
          <HomeSearchBar onSubmit={this.getUserData}></HomeSearchBar>
          <div className="Home-Row-1 row">
            <HomeUserMeta></HomeUserMeta>
            <HomeStats></HomeStats>
            <HomeContributions></HomeContributions>
            <HomeRepos></HomeRepos>
          </div>
        </div>
      </div>
    );
  }
}

export default AppHome;
