import React, { Component } from 'react';
import './Home.css';
import HomeSearchBar from './components/Home-Search-Bar.js';
import HomeUserMeta from './components/Home-User-Meta.js';
import HomeStats from './components/Home-Stats.js';
import HomeEvents from './components/Home-Events.js';
import HomeRepos from './components/Home-Repos.js';
import { getUserData } from './services/api';
import ReactGA from 'react-ga';
import QueryString from 'query-string';

class AppHome extends Component {

  constructor(props) {
    super(props);

    this.state = {
      userSearchQuery: '',
      userData: null,
      loadingUser: false,
      userError: null
    };

    this.getUserData = this.getUserData.bind(this);
    this.getUserError = this.getUserError.bind(this);
  }

  componentDidMount() {
    if (this.props.location && this.props.location.search) {
      const queuries = QueryString.parse(this.props.location.search);
      this.setState({
        userSearchQuery: queuries.search
      });
      this.getUserData(queuries.search);
    }
  }

  getUserData = async (username) => {
    ReactGA.event({
      category: 'Search',
      action: 'Searched user'
    });
    this.setState({
      loadingUser: true,
      userError: null
    });
    try {
      const result = await getUserData(username);
      if (!result.ok) {
        const error = await result.json();
        if (error.message && error.message.includes('with the login')) {
          throw new Error(`User '${username}' not found. Please check the username and try again.`);
        }
        throw new Error('Error loading user, please try again.');
      }
      const userData = await result.json();
      this.setState({
        userData,
        loadingUser: false
      });
    } catch (e) {
      this.setState({
        loadingUser: false,
        userError: e.message
      });
    }
  }

  getUserError = () => {
    if (this.state.userError) {
      return (
        <div className="Home-error">
          { this.state.userError }
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
          <HomeSearchBar query={this.state.userSearchQuery} onSubmit={this.getUserData} loadingUser={this.state.loadingUser}></HomeSearchBar>
          <div className="Home-Row-1 row">
            <HomeUserMeta userData={this.state.userData}></HomeUserMeta>
            <HomeStats userData={this.state.userData}></HomeStats>
            <HomeEvents userData={this.state.userData}></HomeEvents>
            <HomeRepos userData={this.state.userData}></HomeRepos>
          </div>
        </div>
      </div>
    );
  }
}

export default AppHome;
