import React, { Component } from 'react';
import './Home-Stats.css';

class HomeStats extends Component {
  render() {
    return (
      <div className="Stats col">
        <div>
          <span className="Stats-started">User since: <b>June 16, 2014</b></span>
          <span className="Stats-repos">Public Repos: <b>4</b></span>
          <span className="Stats-gists">Public Gists: <b>2</b></span>
          <span className="Stats-followers">Followers: <b>2</b></span>
          <span className="Stats-following">Following: <b>1</b></span>
        </div>
      </div>
    );
  }
}

export default HomeStats;
