import React, { Component } from 'react';
import './Home-Contributions.css';
import { IconContext } from "react-icons";
import { GoGitCommit, GoGitPullRequest, GoGitMerge, GoRepo, GoIssueOpened, GoIssueClosed } from 'react-icons/go';

class HomeContributions extends Component {
  render() {
    return (
      <div className="Contributions col">
        <div className="Contributions-contr">
          <div className="Contributions-contr-icon">
            <IconContext.Provider value={{ color: "#000" }}>
              <div>
                <GoGitCommit />
              </div>
            </IconContext.Provider>
          </div>
          <div className="Contributions-contr-summary">
            Created commit in repo, <b><a href="https://www.github.com">Some Repo</a></b>
          </div>
          <span className="Contributions-contr-line"></span>
          <div className="Contributions-contr-date">
            July 30, 2018
          </div>
        </div>
        <div className="Contributions-contr">
          <div className="Contributions-contr-icon">
            <IconContext.Provider value={{ color: "#000" }}>
              <div>
                <GoRepo />
              </div>
            </IconContext.Provider>
          </div>
          <div className="Contributions-contr-summary">
            Created a repo, <b><a href="https://www.github.com">Some Repo</a></b>
          </div>
          <span className="Contributions-contr-line"></span>
          <div className="Contributions-contr-date">
            July 30, 2018
          </div>
        </div>
        <div className="Contributions-contr">
          <div className="Contributions-contr-icon">
            <IconContext.Provider value={{ color: "#000" }}>
              <div>
                <GoGitPullRequest />
              </div>
            </IconContext.Provider>
          </div>
          <div className="Contributions-contr-summary">
            Created a pull request in repo, <b><a href="https://www.github.com">Some Repo</a></b>
          </div>
          <span className="Contributions-contr-line"></span>
          <div className="Contributions-contr-date">
            July 30, 2018
          </div>
        </div>
        <div className="Contributions-contr">
          <div className="Contributions-contr-icon">
            <IconContext.Provider value={{ color: "#000" }}>
              <div>
                <GoGitMerge />
              </div>
            </IconContext.Provider>
          </div>
          <div className="Contributions-contr-summary">
            Merged a pull request in repo, <b><a href="https://www.github.com">Some Repo</a></b>
          </div>
          <span className="Contributions-contr-line"></span>
          <div className="Contributions-contr-date">
            July 30, 2018
          </div>
        </div>
        <div className="Contributions-contr">
          <div className="Contributions-contr-icon">
            <IconContext.Provider value={{ color: "#000" }}>
              <div>
                <GoIssueOpened />
              </div>
            </IconContext.Provider>
          </div>
          <div className="Contributions-contr-summary">
            Created an issue in repo, <b><a href="https://www.github.com">Some Repo</a></b>
          </div>
          <span className="Contributions-contr-line"></span>
          <div className="Contributions-contr-date">
            July 30, 2018
          </div>
        </div>
        <div className="Contributions-contr">
          <div className="Contributions-contr-icon">
            <IconContext.Provider value={{ color: "#000" }}>
              <div>
                <GoIssueClosed />
              </div>
            </IconContext.Provider>
          </div>
          <div className="Contributions-contr-summary">
            Closed an issue in repo, <b><a href="https://www.github.com">Some Repo</a></b>
          </div>
          <span className="Contributions-contr-line"></span>
          <div className="Contributions-contr-date">
            July 30, 2018
          </div>
        </div>
        <div className="Contributions-contr">
          <div className="Contributions-contr-icon">
            <IconContext.Provider value={{ color: "#000" }}>
              <div>
                <GoGitPullRequest />
              </div>
            </IconContext.Provider>
          </div>
          <div className="Contributions-contr-summary">
            Reviewed an issue in repo, <b><a href="https://www.github.com">Some Repo</a></b>
          </div>
          <span className="Contributions-contr-line"></span>
          <div className="Contributions-contr-date">
            July 30, 2018
          </div>
        </div>
      </div>
    );
  }
}

export default HomeContributions;
