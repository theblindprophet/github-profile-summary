import React, { Component } from 'react';
import './Home.css';
import HomeSearchBar from './components/Home-Search-Bar.js';
import HomeUserMeta from './components/Home-User-Meta.js';
import HomeStats from './components/Home-Stats.js';
import HomeContributions from './components/Home-Contributions.js';
import HomeRepos from './components/Home-Repos.js';
import { getUserData } from './services/api';

class AppHome extends Component {

  constructor(props) {
    super(props);

    this.state = {
      userData: null,
      loadingUser: false
    };

    this.getUserData = this.getUserData.bind(this);
    this.getUserError = this.getUserError.bind(this);
  }

  getUserData = (username) => {
    this.setState({
      loadingUser: true,
      userError: false
    });
    getUserData(username)
      .then(res => res.json())
      .then(userData => {
        this.setState({
          userData,
          loadingUser: false
        });
      })
      .catch(err => {
        this.setState({
          loadingUser: false,
          userError: true
        });
        console.error(err);
      });
  }

  getUserError = () => {
    if (this.state.userError) {
      return (
        <div className="Home-error">
          Error loading user, please try again.
        </div>
      );
    }
    return '';
  }

  render() {
    return (
      <div className="Home">
        <div className="Home-container">
          {this.getUserError()}
          <HomeSearchBar onSubmit={this.getUserData} loadingUser={this.state.loadingUser}></HomeSearchBar>
          <div className="Home-Row-1 row">
            <HomeUserMeta userData={this.state.userData}></HomeUserMeta>
            <HomeStats userData={this.state.userData}></HomeStats>
            <HomeContributions></HomeContributions>
            <HomeRepos></HomeRepos>
          </div>
        </div>
      </div>
    );
  }
}

export default AppHome;
