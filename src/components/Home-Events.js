import React, { Component } from 'react';
import './Home-Events.css';
import { IconContext } from "react-icons";
import { GoGitPullRequest, GoGitMerge, GoGitBranch, GoRepo, GoIssueOpened, GoIssueClosed, GoIssueReopened } from 'react-icons/go';
import { FaQuestionCircle, FaEye, FaStar, FaTag, FaCheck, FaPencilAlt, FaTimes, FaExternalLinkSquareAlt } from 'react-icons/fa';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

class HomeEvents extends Component {

  constructor(props) {
    super(props);

    this.createEvents = this.createEvents.bind(this);
    this.noEventsText = this.noEventsText.bind(this);
    this.getEventIcon = this.getEventIcon.bind(this);
    this.getEventDesc = this.getEventDesc.bind(this);
    this.userUrl = this.userUrl.bind(this);
    this.getLinkPath = this.getLinkPath.bind(this);
    this.getEventRepoUrl = this.getEventRepoUrl.bind(this);
  }

  createEvents = () => {
    if (!this.props.userData || !this.props.userData.events || this.props.userData.events.length === 0) {
      return (
        <div className="Events col">
          <div className="Events-contr">
            <div className="Events-contr-icon">
              <IconContext.Provider value={{}}>
                <div>
                  <FaQuestionCircle />
                </div>
              </IconContext.Provider>
            </div>
            <div className="Events-contr-summary">
              {this.noEventsText()}
            </div>
            <span className="Events-contr-line"></span>
            <div className="Events-contr-date"></div>
          </div>
        </div>
      );
    } else {
      const events = this.props.userData.events;
      return (
        <div className="Events col">
          {
            events.map(({ created_at, type, repo, action, ref_type, merged = false }, index) => {
              const date = new Date(created_at);
              const dateFormatted = `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
              let repoName = 'Some repo';
              if (repo.name.split('/').length > 0) {
                repoName = repo.name.split('/')[1];
              } else if (repo.name) {
                repoName = repo.name;
              }
              return (
                <div className="Events-contr" key={index}>
                  <div className="Events-contr-icon">
                    <IconContext.Provider value={{}}>
                      <div>
                        {this.getEventIcon(type, action, ref_type, merged)}
                      </div>
                    </IconContext.Provider>
                  </div>
                  <div className="Events-contr-summary">
                    {this.getEventDesc(type, action, ref_type, merged)}, <b><a href={this.getEventRepoUrl(repo.url) + this.getLinkPath(type)} target="_blank" rel="noopener noreferrer">{repoName}</a></b>
                  </div>
                  <span className="Events-contr-line"></span>
                  <div className="Events-contr-date">{dateFormatted}</div>
                </div>
              );
            })
          }
          <div className="Events-contr" key="-1">
            <div className="Events-contr-icon">
              <IconContext.Provider value={{}}>
                <div>
                  <FaExternalLinkSquareAlt />
                </div>
              </IconContext.Provider>
            </div>
            <div className="Events-contr-summary">
              View all events, <b><a href={this.userUrl()} target="_blank" rel="noopener noreferrer">{this.userUrl()}</a></b>
            </div>
          </div>
        </div>
      );
    }
  }

  noEventsText = () => {
    if (!this.props.userData || !this.props.userData.events) {
      return 'A list of events...';
    }
    return 'User has no events in the last 3 months.';
  }

  getEventIcon = (type, action, ref_type, merged) => {
    switch (type) {
      case 'IssuesEvent':
        if (action === 'closed')
          return (<GoIssueClosed />);
        else if (action === 'reopened')
          return (<GoIssueReopened />);
        else
          return (<GoIssueOpened />);
      case 'CreateEvent':
        if (ref_type === 'repository')
          return (<GoRepo />);
        else if (ref_type === 'branch')
          return (<GoGitBranch />);
        else if (ref_type === 'tag')
          return (<FaTag />);
        else
          return (<FaPencilAlt />);
      case 'PullRequestEvent':
        if (merged)
          return (<GoGitMerge />);
        else
          return (<GoGitPullRequest />);
      case 'PullRequestReviewEvent':
        if (action === 'submitted')
          return (<FaCheck />);
        else if (action === 'edited')
          return (<FaPencilAlt />);
        else if (action === 'dismissed')
          return (<FaTimes />);
        else
          return (<FaEye />);
      case 'PushEvent':
        return (<GoGitBranch />);
      case 'WatchEvent':
        return (<FaStar />);
      default:
        return (
          <GoRepo />
        );
    }
  }

  getEventDesc = (type, action, ref_type, merged) => {
    let text = '';
    switch (type) {
      case 'IssuesEvent':
      case 'PullRequestReviewEvent':
        text = `${action} an issue`;
        break;
      case 'CreateEvent':
        if (ref_type === 'repository')
          text = 'Created a repo'
        else if (ref_type === 'branch')
          text = 'Created a branch';
        else if (ref_type === 'tag')
          text = 'Created a tag';
        else
          text = 'Created something';
        break;
      case 'PullRequestEvent':
        if (action === 'closed' && merged)
          text = 'Merged a pull request';
        else if (action === 'closed' && !merged)
          text = 'Closed a pull request';
        else if (action === 'review_requested')
          text = 'Requested a pull request review';
        else if (action === 'review_requested_removed')
          text = 'Removed a pull request review';
        else
          text = `${action} a pull request`;
        break;
      case 'PushEvent':
        text = 'Pushed to a branch';
        break;
      case 'WatchEvent':
        text = 'Starred a repository'
        break;
      default:
        text = 'Performed an unknown action';
        break;
    }
    return text.substr(0,1).toLocaleUpperCase() + text.substr(1);
  }

  getEventRepoUrl = (url) => {
    return url.replace(/(api\.|\/repos)/g, '');
  }

  getLinkPath = (type) => {
    switch (type) {
      case 'IssuesEvent':
        return '/issues'
      case 'PullRequestEvent':
        return '/pulls';
      default:
        return '';
    }
  }

  userUrl = () => {
    if (this.props.userData && this.props.userData.url) {
      return this.props.userData.url;
    }
    return 'https://github.com';
  }

  render() {
    return this.createEvents();
  }
}

export default HomeEvents;
