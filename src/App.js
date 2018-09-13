import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Home from './Home.js';
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
          <h1 className="App-header-title">Github Profile Summary</h1>
        </header>
        <div className="App-container">
          <Router>
            <Route exact path="/" component={Home} />
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
                <a href="google.com" target="_blank" rel="noopener noreferrer">Privacy Policy</a><br />
                <a href="google.com" target="_blank" rel="noopener noreferrer">Terms of Service</a>
              </p>
            </li>
          </ul>
        </footer>
      </div>
    );
  }
}

export default App;
