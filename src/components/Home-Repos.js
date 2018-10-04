import React, { Component } from 'react';
import './Home-Repos.css';
import { IconContext } from 'react-icons';
import { GoRepo } from 'react-icons/go';
import { FaStar } from 'react-icons/fa';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


class HomeRepos extends Component {
  constructor(props) {
    super(props);

    this.createRepos = this.createRepos.bind(this);
    this.createRepo = this.createRepo.bind(this);
    this.moreRepos = this.moreRepos.bind(this);
    this.createLanguages = this.createLanguages.bind(this);
    this.repoClicked = this.repoClicked.bind(this);
  }

  createRepos = () => {
    if (!this.props.userData || !this.props.userData.repositories
      || this.props.userData.repositories.edges.length === 0) {
      return (
        <div className="Repos col">
          <div className="Repos-repo">
            <IconContext.Provider value={ {} }>
              <div className="Repos-repo-icon">
                <GoRepo />
              </div>
            </IconContext.Provider>
            <p className="Repos-repo-name">{(!this.props.userData || !this.props.userData.repositories) ? 'A list of repositories...' : 'No repositories found...'}</p>
          </div>
        </div>
      );
    }
    const repos = this.props.userData.repositories.edges;
    return (
      <div className="Repos col">
        {
          repos.map(({ node }, index) => this.createRepo(node, index))
        }
        {this.moreRepos()}
      </div>
    );
  }

  createRepo = (node, index) => {
    let dateFormatted;
    if (node.updatedAt) {
      const date = new Date(node.updatedAt);
      dateFormatted = `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
    } else {
      dateFormatted = 'Unknown';
    }
    return (
      <div className="Repos-repo" key={ index } onClick={ () => this.repoClicked(index) }>
        <IconContext.Provider value={ {} }>
          <div className="Repos-repo-icon stay">
            <GoRepo />
          </div>
        </IconContext.Provider>
        <a className="Repos-repo-name" href={ node.url } target="_blank" rel="noopener noreferrer">{node.name}</a>

        <div className="Repos-repo-stars">
          {this.repoStarCount(node)}
        </div>

        <IconContext.Provider value={ {} }>
          <div className="Repos-repo-icon">
            <FaStar />
          </div>
        </IconContext.Provider>

        <div className="Repos-repo-updated">
          Last Updated:
          {' '}
          <b>{dateFormatted}</b>
        </div>
        {this.createLanguages(node.languages.edges)}
      </div>
    );
  }

  moreRepos = () => {
    if (!this.props.userData || !this.props.userData.repositories) {
      return '';
    } if (this.props.userData.repositories.totalCount <= 30) {
      return '';
    }
    const url = `${this.props.userData.url}?tab=repositories`;
    return (
      <div className="Repos-repo" key="30">
        <IconContext.Provider value={ {} }>
          <div className="Repos-repo-icon">
            <GoRepo />
          </div>
        </IconContext.Provider>
        <a className="Repos-repo-name" href={ url } target="_blank" rel="noopener noreferrer">View all repositiories...</a>
      </div>
    );
  }

  createLanguages = (languages) => {
    if (!languages || languages.length === 0) {
      return (
        ''
      );
    }
    return (
      <div className="Repos-repo-languages">
        {
          languages.map(({ node }, index) => (
            <div className="Repos-repo-languages-lang" style={ { borderColor: node.color } } key={ index }>
              {node.name}
            </div>
          ))
        }
      </div>
    );
  }

  repoClicked = (index) => {
    this.props.onRepoClick(this.props.userData.repositories.edges[index].node);
  }

  repoStarCount = (node) => {
    if (node.stargazers) {
      return node.stargazers.totalCount !== null && node.stargazers.totalCount !== undefined ? node.stargazers.totalCount : '?';
    }
    return '?';
  }

  render() {
    return this.createRepos();
  }
}

export default HomeRepos;
