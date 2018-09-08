import React, { Component } from 'react';
import './Home-Stats.css';
import { IconContext } from "react-icons";
import { GoGitCommit, GoGist, GoRepo, GoIssueOpened } from 'react-icons/go';
import { FaHourglassStart, FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

class HomeStats extends Component {

  constructor(props) {
    super(props);

    this.userCreated = this.userCreated.bind(this);
  }

  userCreated = () => {
    if (this.props.userData && this.props.userData.createdAt) {
      const date = new Date(this.props.userData.createdAt);
      return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
    }
    return 'When...';
  }

  render() {
    return (
      <div className="Stats col">
        <div>
          <span className="Stats-started">
            <div className="Stats-icon">
              <IconContext.Provider value={{ color: "#fff" }}>
                <div>
                  <FaHourglassStart />
                </div>
              </IconContext.Provider>
            </div>
            User since: <b>{ this.userCreated() }</b>
          </span>
          <span className="Stats-repos">
            <div className="Stats-icon">
              <IconContext.Provider value={{ color: "#fff" }}>
                <div>
                  <GoRepo />
                </div>
              </IconContext.Provider>
            </div>
            Public Repos: <b>4</b>
          </span>
          <span className="Stats-gists">
            <div className="Stats-icon">
              <IconContext.Provider value={{ color: "#fff" }}>
                <div>
                  <GoGist />
                </div>
              </IconContext.Provider>
            </div>
            Public Gists: <b>2</b>
          </span>
          <span className="Stats-followers">
            <div className="Stats-icon">
              <IconContext.Provider value={{ color: "#fff" }}>
                <div>
                  <FaArrowAltCircleLeft />
                </div>
              </IconContext.Provider>
            </div>
            Followers: <b>2</b>
          </span>
          <span className="Stats-following">
            <div className="Stats-icon">
              <IconContext.Provider value={{ color: "#fff" }}>
                <div>
                  <FaArrowAltCircleRight />
                </div>
              </IconContext.Provider>
            </div>
            Following: <b>1</b>
          </span>
          <span className="Stats-commits">
            <div className="Stats-icon">
              <IconContext.Provider value={{ color: "#fff" }}>
                <div>
                  <GoGitCommit />
                </div>
              </IconContext.Provider>
            </div>
            Public Commits: <b>1</b>
          </span>
          <span className="Stats-issues">
            <div className="Stats-icon">
              <IconContext.Provider value={{ color: "#fff" }}>
                <div>
                  <GoIssueOpened />
                </div>
              </IconContext.Provider>
            </div>
            Public Issues: <b>1</b>
          </span>
        </div>
      </div>
    );
  }
}

export default HomeStats;
