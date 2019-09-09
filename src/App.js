import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import ReactGA from 'react-ga';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Home from './Home';
import TermsAndService from './TermsAndPrivacy';
import { addUser } from './services/api';
import { authenticate, unauthenticate, listenAuth } from './services/firebase';
import logo from './assets/logo.png';
import githubLogo from './assets/github-logo.png';

class App extends Component {
  constructor() {
    super();
    this.state = {
      snackbar: {
        open: false,
        message: '',
        isError: false
      },
      isAuth: false,
      authUser: null
    };

    this.getAuthMarkup = this.getAuthMarkup.bind(this);
    this.getAuthUserImage = this.getAuthUserImage.bind(this);
    this.authenticateUser = this.authenticateUser.bind(this);
    this.showSnackbar = this.showSnackbar.bind(this);
    this.handleCloseSnackbar = this.handleCloseSnackbar.bind(this);
  }

  componentWillMount() {
    ReactGA.initialize('UA-125433432-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
    listenAuth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ isAuth: true, authUser: user });
      } else {
        this.setState({ isAuth: false, authUser: null });
      }
    });
  }

  getAuthMarkup = () => {
    if (this.state.isAuth) {
      return (
        <img className="App-header-auth-solo" src={ this.getAuthUserImage() } alt="github" />
      );
    }
    return (
      <button className="App-header-auth-submit" type="submit" onClick={ this.authenticateUser }>
        Login
        <img className="App-header-auth-submit-icon" src={ githubLogo } alt="github" />
      </button>
    );
  };

  getAuthUserImage = () => {
    if (this.state.authUser && this.state.authUser.photoURL) {
      return this.state.authUser.photoURL;
    }
    return githubLogo;
  }

  authenticateUser = async () => {
    try {
      const token = await authenticate();
      const response = await addUser(this.state.authUser.uid, token);
      if (!response.ok) {
        throw await response.json();
      }
      ReactGA.event({
        category: 'Auth',
        action: 'Authenticated user'
      });
    } catch (e) {
      unauthenticate();
      this.showSnackbar(true, 'Error authenticating, please try again.');
    }
  };

  handleCloseSnackbar = () => {
    this.setState({ snackbar: { open: false, message: '', isError: false } });
  };

  showSnackbar = (isError, message) => {
    this.setState({ snackbar: { open: true, message, isError } });
  };

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
          <div className="App-header-right">
            <img className="App-header-right-logo" src={ logo } alt="logo" />
          </div>
          <div className="App-header-auth">
            { this.getAuthMarkup() }
          </div>
        </header>
        <div className="App-container">
          <Router>
            <div>
              <Route
                exact
                path="/"
                render={ props => (
                  <Home
                    username={ props.match.params.username }
                    showSnackbar={ this.showSnackbar }
                  />
                ) }
              />
              <Route
                path="/user/:username"
                render={ props => (
                  <Home
                    username={ props.match.params.username }
                    showSnackbar={ this.showSnackbar }
                  />
                ) }
              />
              <Route path="/terms-and-privacy" component={ TermsAndService } />
            </div>
          </Router>
        </div>
        <footer className="App-footer">
          <ul className="App-footer-list">
            <li>
              <p>
                Contact Us
                <br />
                <a href="mailto:theblndprophet@gmail.com">
                  Jamie Gross (theblndprophet@gmail.com)
                </a>
                <br />
                <a href="mailto:contact@thewillg.com">Will Garcia (contact@thewillg.com)</a>
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
            <img src={ githubLogo } alt="github" />
          </div>
          <div className="App-footer-logo">
            <img src={ logo } alt="logo" />
          </div>
        </footer>
        <Snackbar
          anchorOrigin={ {
            vertical: 'bottom',
            horizontal: 'left',
          } }
          open={ this.state.snackbar.open }
          onClose={ this.handleCloseSnackbar }
          autoHideDuration={ 6000 }
          message={ <span style={ { color: this.state.snackbar.isError ? '#ff4160' : '#EFEFEF' } }>{ this.state.snackbar.message }</span> }
          action={ [
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              onClick={ this.handleCloseSnackbar }
            >
              <CloseIcon />
            </IconButton>
          ] }
        />
      </div>
    );
  }
}

export default App;
