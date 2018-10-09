import React, { Component } from 'react';
import { IconContext } from 'react-icons';
import { FaHandPointUp, FaSpinner } from 'react-icons/fa';
import { postRecommendation } from '../services/api';
import { getUser, unauthenticate, isAuthenticated } from '../services/firebase';
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
      return;
    }

    this.setState({
      savingThumb: true
    });
    try {
      const user = getUser();
      const response = await postRecommendation(this.props.userData.login, user.uid);
      if (!response.ok) {
        throw await response.json();
      }
      this.props.showSnackbar(false, 'Recommended user!');
      this.props.refreshRecommendations(this.props.userData.login);
    } catch (e) {
      if (e.error === 'FirebaseUid does not exist' || e.error === 'Failed to validate accessToken with this firebaseUid') {
        this.props.showSnackbar(true, 'Error authenticating, please login again.');
        unauthenticate();
      } else if (e.error === 'You have already recommended up this user!') {
        this.props.showSnackbar(true, 'You have already recommended this user.');
      } else {
        this.props.showSnackbar(true, 'Error recommending user, please try again.');
      }
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
