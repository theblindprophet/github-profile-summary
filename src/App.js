import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Home from './Home.js';
import TermsAndService from './TermsAndPrivacy.js';
import logo from './assets/github-logo.png';
import ReactGA from 'react-ga';

class App extends Component {

  componentDidMount() {
    ReactGA.initialize('UA-125433432-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  render() {
    return (
      <div className="App-wrapper">
        <header className="App-header">
          <div>
            <span>Integrated with </span><img src={logo} className="App-header-logo" alt="logo" />
          </div>
          <a href="/"><h1 className="App-header-title">Github Profile Summary</h1></a>
        </header>
        <div className="App-container">
          <Router>
            <div>
              <Route exact path="/" component={Home} />
              <Route path="/terms-and-privacy" component={TermsAndService} />
            </div>
          </Router>
        </div>
        <footer className="App-footer">
          <ul className="App-footer-list">
            <li>
              <p>
                Contact Us<br />
                <a href="mailto:jamie.gross@graspmobiledevelopment.com">jamie.gross@graspmobiledevelopment.com</a><br />
                <a href="mailto:contact@thewillg.com">contact@thewillg.com</a>
              </p>
            </li>
          </ul>
          <ul className="App-footer-list">
            <li>
              <p>
                &#169; 2018 githubprofilesummary.com
                <br />
                <a href="/terms-and-privacy#terms">Terms of Service</a><br />
                <a href="/terms-and-privacy#privacy">Privacy Policy</a>
              </p>
            </li>
          </ul>
        </footer>
      </div>
    );
  }
}

export default App;
