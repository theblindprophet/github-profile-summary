import React, { Component } from 'react';
import { IconContext } from 'react-icons';
import { FaHandPointUp, FaSpinner } from 'react-icons/fa';
import { thumbsUp } from '../services/api';
import { getUser, isAuthenticated } from '../services/firebase';
import './Home-Social.css';

class HomeSocial extends Component {
  constructor(props) {
    super(props);
    this.state = {
      savingThumb: false
    };

    this.getRecommendationIcon = this.getRecommendationIcon.bind(this);
    this.recommendUser = this.recommendUser.bind(this);
  }

  getRecommendationIcon = () => {
    if (this.state.savingThumb) {
      return (
        <IconContext.Provider value={ {} }>
          <div className="Social-Bar-actions-recommend-icon spinner">
            <FaSpinner />
          </div>
        </IconContext.Provider>
      );
    }
    return (
      <IconContext.Provider value={ {} }>
        <div className="Social-Bar-actions-recommend-icon">
          <FaHandPointUp />
        </div>
      </IconContext.Provider>
    );
  };

  recommendUser = async () => {
    if (!this.props.userData || !this.props.userData.login) {
      return;
    }
    if (!isAuthenticated()) {
      this.props.showSnackbar(false, 'You must login (top right) before recommending a user.');
    }

    this.setState({
      savingThumb: true
    });
    try {
      const user = await getUser();
      // await thumbsUp(this.props.userData.username, token);
    } catch (e) {
      this.props.showSnackbar(true, 'Error recommending user, please try again.');
    } finally {
      this.setState({
        savingThumb: false
      });
    }
  };

  render() {
    if (!this.props.userData) {
      return '';
    }
    return (
      <div className="Social-Bar col">
        <div className="Social-Bar-actions">
          <button
            type="button"
            className="Social-Bar-actions-recommend"
            onClick={ this.recommendUser }
          >
            Recommend
            { this.getRecommendationIcon() }
          </button>
        </div>
      </div>
    );
  }
}

export default HomeSocial;
