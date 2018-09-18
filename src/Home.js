import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';
import './Home.css';
import HomeSearchBar from './components/Home-Search-Bar.js';
import HomeUserMeta from './components/Home-User-Meta.js';
import HomeStats from './components/Home-Stats.js';
import HomeLanguages from './components/Home-Languages.js';
import HomeEvents from './components/Home-Events.js';
import HomeRepos from './components/Home-Repos.js';
import { getUserData } from './services/api';
import ReactGA from 'react-ga';
import QueryString from 'query-string';

const colors = ['#555662', '#3c93a3', '#5fbacc', '#3b3c4b', '#9a9a9a', '#323238', '#063740', '#d2d2d2'];

class AppHome extends Component {

  constructor(props) {
    super(props);

    this.state = {
      userSearchQuery: '',
      userData: null,
      loadingUser: false,
      userError: null,
      showRepoPopup: false,
      repoPopup: null
    };

    this.getUserData = this.getUserData.bind(this);
    this.getUserError = this.getUserError.bind(this);
    this.createRepoPopup = this.createRepoPopup.bind(this);
    this.popupClicked = this.popupClicked.bind(this);
    this.getRepoPopupData = this.getRepoPopupData.bind(this);
    this.getRepoPopupOptions = this.getRepoPopupOptions.bind(this);
    this.getRepoPopupName = this.getRepoPopupName.bind(this);
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

  createRepoPopup = (repoPopup) => {
    if (this.state.userData && this.state.userData.repoLanguagePercents) {
      const langsForRepo = this.state.userData.repoLanguagePercents.find(({ repo }) => repoPopup.name === repo);
      this.setState({
        showRepoPopup: true,
        repoPopup: langsForRepo
      });
    }
  }

  popupClicked = (event) => {
    if (event.target && event.target.id === 'Home-repopopup') {
      this.setState({
        showRepoPopup: false,
        repoPopup: null
      });
    }
  }

  getRepoPopupData = () => {
    let languages = [];
    if (this.state.repoPopup && this.state.repoPopup.languages) {
      languages = this.state.repoPopup.languages;
    }
    const data = {
      labels: languages.map(lang => `${lang.name} ${lang.percent}%`),
      datasets: [
        {
          backgroundColor: languages.map((lang, index) => colors[index % colors.length]),
          data: languages.map(lang => lang.percent)
        }
      ]
    };
    return data;
  }

  getRepoPopupOptions = () => {
    const options = {
      maintainAspectRatio: true,
      animation: {
        animateScale: true
      },
      elements: {
        arc: {
          borderColor: 'rgba(52, 54, 66, 0.9)'
        }
      },
      tooltips: {
        callbacks: {
          label: (tooltipItem, data) => {
            return `${data.labels[tooltipItem.index]}`;
          }
        }
      }
    };
    return options;
  }

  getRepoPopupName = () => {
    if (this.state.repoPopup) {
      return this.state.repoPopup.repo || 'Unknown';
    }
    return 'Unknown';
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
            <HomeLanguages userData={this.state.userData}></HomeLanguages>
            <HomeEvents userData={this.state.userData}></HomeEvents>
            <HomeRepos userData={this.state.userData} onRepoClick={this.createRepoPopup}></HomeRepos>
          </div>
        </div>
        <div id="Home-repopopup" className="Home-repopopup" style={{ display: this.state.showRepoPopup ? 'flex' : 'none' }} onClick={this.popupClicked}>
          <div>
            <p className="Home-repopopup-name">{this.getRepoPopupName()}</p>
            <Pie width={285} height={285} data={this.getRepoPopupData()} options={this.getRepoPopupOptions()}></Pie>
          </div>
        </div>
      </div>
    );
  }
}

export default AppHome;
