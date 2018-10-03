import React, { Component } from 'react';
import './Home-Stats.css';
import { IconContext } from 'react-icons';
import { GoGist, GoRepo, GoIssueOpened, GoGitPullRequest, GoStar } from 'react-icons/go';
import { FaHourglassStart, FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

class HomeStats extends Component {
  constructor(props) {
    super(props);

    this.userCreated = this.userCreated.bind(this);
    this.publicReposCount = this.publicReposCount.bind(this);
    this.publicGistsCount = this.publicGistsCount.bind(this);
    this.followersCount = this.followersCount.bind(this);
    this.followingCount = this.followingCount.bind(this);
    this.prCount = this.prCount.bind(this);
    this.issuesCount = this.issuesCount.bind(this);
    this.starsCount = this.starsCount.bind(this);
  }

  userCreated = () => {
    if (this.props.userData && this.props.userData.createdAt) {
      const date = new Date(this.props.userData.createdAt);
      return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
    }
    return 'When...';
  }

  publicReposCount = () => {
    if (this.props.userData && this.props.userData.repositories) {
      const { totalCount } = this.props.userData.repositories;
      return totalCount !== null ? totalCount : '?';
    }
    return '?';
  }

  publicGistsCount = () => {
    if (this.props.userData && this.props.userData.gists) {
      const { totalCount } = this.props.userData.gists;
      return totalCount !== null ? totalCount : '?';
    }
    return '?';
  }

  followersCount = () => {
    if (this.props.userData && this.props.userData.followers) {
      const { totalCount } = this.props.userData.followers;
      return totalCount !== null ? totalCount : '?';
    }
    return '?';
  }

  followingCount = () => {
    if (this.props.userData && this.props.userData.following) {
      const { totalCount } = this.props.userData.following;
      return totalCount !== null ? totalCount : '?';
    }
    return '?';
  }

  prCount = () => {
    if (this.props.userData && this.props.userData.pullRequests) {
      const { totalCount } = this.props.userData.pullRequests;
      return totalCount !== null ? totalCount : '?';
    }
    return '?';
  }

  issuesCount = () => {
    if (this.props.userData && this.props.userData.issues) {
      const { totalCount } = this.props.userData.issues;
      return totalCount !== null ? totalCount : '?';
    }
    return '?';
  }

  userTabLink = (tab) => {
    if (this.props.userData && this.props.userData.url) {
      return `${this.props.userData.url}?tab=${tab}`;
    }
    return 'https://github.com';
  }

  userGistsLink = () => {
    if (this.props.userData && this.props.userData.login) {
      return `https://gist.github.com/${this.props.userData.login}`;
    }
    return 'https://gist.github.com';
  }

  starsCount = () => {
    if (this.props.userData && this.props.userData.starredRepositories) {
      const { totalCount } = this.props.userData.starredRepositories;
      return totalCount !== null ? totalCount : '?';
    }
    return '?';
  }

  render() {
    return (
      <div className="Stats col">
        <div>
          <span className="Stats-started">
            <div className="Stats-icon">
              <IconContext.Provider value={ { color: '#fff' } }>
                <div>
                  <FaHourglassStart />
                </div>
              </IconContext.Provider>
            </div>
            User since:
            {' '}
            <b>{ this.userCreated() }</b>
          </span>
          <span className="Stats-repos">
            <div className="Stats-icon">
              <IconContext.Provider value={ { color: '#fff' } }>
                <div>
                  <GoRepo />
                </div>
              </IconContext.Provider>
            </div>
            <a href={ this.userTabLink('repositories') } target="_blank" rel="noopener noreferrer">
              Public Repos:
              {' '}
              <b>{this.publicReposCount()}</b>
            </a>
          </span>
          <span className="Stats-gists">
            <div className="Stats-icon">
              <IconContext.Provider value={ { color: '#fff' } }>
                <div>
                  <GoGist />
                </div>
              </IconContext.Provider>
            </div>
            <a href={ this.userGistsLink() } target="_blank" rel="noopener noreferrer">
              Public Gists:
              {' '}
              <b>{this.publicGistsCount()}</b>
            </a>
          </span>
          <span className="Stats-followers">
            <div className="Stats-icon">
              <IconContext.Provider value={ { color: '#fff' } }>
                <div>
                  <FaArrowAltCircleLeft />
                </div>
              </IconContext.Provider>
            </div>
            <a href={ this.userTabLink('followers') } target="_blank" rel="noopener noreferrer">
              Followers:
              {' '}
              <b>{this.followersCount()}</b>
            </a>
          </span>
          <span className="Stats-following">
            <div className="Stats-icon">
              <IconContext.Provider value={ { color: '#fff' } }>
                <div>
                  <FaArrowAltCircleRight />
                </div>
              </IconContext.Provider>
            </div>
            <a href={ this.userTabLink('following') } target="_blank" rel="noopener noreferrer">
              Following:
              {' '}
              <b>{this.followingCount()}</b>
            </a>
          </span>
          <span className="Stats-prs">
            <div className="Stats-icon">
              <IconContext.Provider value={ { color: '#fff' } }>
                <div>
                  <GoGitPullRequest />
                </div>
              </IconContext.Provider>
            </div>
            Public Pull Requests:
            {' '}
            <b>{this.prCount()}</b>
          </span>
          <span className="Stats-issues">
            <div className="Stats-icon">
              <IconContext.Provider value={ { color: '#fff' } }>
                <div>
                  <GoIssueOpened />
                </div>
              </IconContext.Provider>
            </div>
            Public Issues:
            {' '}
            <b>{this.issuesCount()}</b>
          </span>
          <span className="Stats-stars">
            <div className="Stats-icon">
              <IconContext.Provider value={ { color: '#fff' } }>
                <div>
                  <GoStar />
                </div>
              </IconContext.Provider>
            </div>
            Stars:
            {' '}
            <b>{this.starsCount()}</b>
          </span>
        </div>
      </div>
    );
  }
}

export default HomeStats;
