import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './Home.js';
import TermsAndService from './TermsAndPrivacy.js';
import logo from './assets/logo.png';
import githubLogo from './assets/github-logo.png';
import ReactGA from 'react-ga';

class App extends Component {
  componentWillMount() {
    ReactGA.initialize('UA-125433432-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  render() {
    return (
      <div className="App-wrapper">
        <header className="App-header">
          <div className="App-header-title">
            <h1>Dyllo</h1>
            <a href="/">
              <h3>
                <i>Github Profile Summary</i>
              </h3>
            </a>
          </div>
          <div>
            <img className="App-header-logo" src={logo} alt="logo" />
          </div>
        </header>
        <div className="App-container">
          <Router>
            <div>
              <Route exact path="/" component={Home} />
              <Route
                path="/user/:username"
                render={props => (
                  <Home username={props.match.params.username} />
                )}
              />
              <Route path="/terms-and-privacy" component={TermsAndService} />
            </div>
          </Router>
        </div>
        <footer className="App-footer">
          <ul className="App-footer-list">
            <li>
              <p>
                Contact Us
                <br />
                <a href="mailto:jamie.gross@graspmobiledevelopment.com">
                  jamie.gross@graspmobiledevelopment.com
                </a>
                <br />
                <a href="mailto:contact@thewillg.com">contact@thewillg.com</a>
              </p>
            </li>
          </ul>
          <ul className="App-footer-list">
            <li>
              <p>
                &#169; 2018 githubprofilesummary.com
                <br />
                <a href="/terms-and-privacy#terms">Terms of Service</a>
                <br />
                <a href="/terms-and-privacy#privacy">Privacy Policy</a>
              </p>
            </li>
          </ul>
          <div className="App-footer-github">
            <span>Integrated with </span>
            <img src={githubLogo} alt="github" />
          </div>
          <div className="App-footer-logo">
            <img src={logo} alt="logo" />
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
