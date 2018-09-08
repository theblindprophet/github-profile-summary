import React, { Component } from 'react';
import './Home-Repos.css';
import { IconContext } from "react-icons";
import { GoRepo } from 'react-icons/go';

class HomeRepos extends Component {
  render() {
    return (
      <div className="Repos col">
        <div className="Repos-repo">
          <IconContext.Provider value={{}}>
            <div className="Repos-repo-icon">
              <GoRepo />
            </div>
          </IconContext.Provider>
          <a className="Repos-repo-name" href="https://www.github.com" target="_blank" rel="noopener noreferrer">Repo name</a>
          <div className="Repos-repo-updated">Last Updated: <b>July 31, 2018</b></div>
        </div>
        <div className="Repos-repo">
          <IconContext.Provider value={{}}>
            <div className="Repos-repo-icon">
              <GoRepo />
            </div>
          </IconContext.Provider>
          <a className="Repos-repo-name" href="https://www.github.com" target="_blank" rel="noopener noreferrer">Repo name</a>
          <div className="Repos-repo-updated">Last Updated: <b>July 31, 2018</b></div>
        </div>
        <div className="Repos-repo">
          <IconContext.Provider value={{}}>
            <div className="Repos-repo-icon">
              <GoRepo />
            </div>
          </IconContext.Provider>
          <a className="Repos-repo-name" href="https://www.github.com" target="_blank" rel="noopener noreferrer">Repo name</a>
          <div className="Repos-repo-updated">Last Updated: <b>July 31, 2018</b></div>
        </div>
        <div className="Repos-repo">
          <IconContext.Provider value={{}}>
            <div className="Repos-repo-icon">
              <GoRepo />
            </div>
          </IconContext.Provider>
          <a className="Repos-repo-name" href="https://www.github.com" target="_blank" rel="noopener noreferrer">Repo name</a>
          <div className="Repos-repo-updated">Last Updated: <b>July 31, 2018</b></div>
        </div>
      </div>
    );
  }
}

export default HomeRepos;
