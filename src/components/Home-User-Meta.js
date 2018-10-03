import React, { Component } from 'react';
import './Home-User-Meta.css';
import { IconContext } from "react-icons";
import { FaMapMarkerAlt, FaUserTie } from 'react-icons/fa';
import userPlaceholderImg from '../assets/user-placeholder.png';
import { postEmail } from '../services/api';


const isValidEmail = value => {
  const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  return reg.test(value);
};

const isValidSubject = value => {
  const formattedValue = value.replace(/\r?\n|\r|\s/g, '');
  return formattedValue.length > 0 && formattedValue.length <= 500;
}

const isValidMessage = value => {
  const formattedValue = value.replace(/\r?\n|\r|\s/g, '');
  return formattedValue.length > 0 && formattedValue.length <= 500;
}

const initialState = {
  from: '',
  subject: '',
  message: '',
  showEmailPopup: false,
};

class HomeUserMeta extends Component {

  constructor(props) {
    super(props);

    this.state = initialState;

    this.userIsHirable = this.userIsHirable.bind(this);
    this.userImg = this.userImg.bind(this);
    this.userName = this.userName.bind(this);
    this.userUsername = this.userUsername.bind(this);
    this.userUrl = this.userUrl.bind(this);
    this.userEmail = this.userEmail.bind(this);
    this.userCompany = this.userCompany.bind(this);
    this.userBio = this.userBio.bind(this);
    this.userLocation = this.userLocation.bind(this);
    this.userWebsite = this.userWebsite.bind(this);
    this.popupClicked = this.popupClicked.bind(this);
    this.closeEmailPopup = this.closeEmailPopup.bind(this);
    this.showEmailPopup = this.showEmailPopup.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.emailPopupSubmit = this.emailPopupSubmit.bind(this);
  }

  handleInputChange(event) {
    const {
      name,
      value
    } = event.target;

    this.setState({
      [name]: value
    });
  }

  popupClicked(event) {
    if(event.target.id === 'User-Meta-email-popup') {
      this.closeEmailPopup();
    }
  }

  closeEmailPopup() {
    this.setState({
      ...this.state, ...initialState
    });
  }

  showEmailPopup() {
    this.setState({
      showEmailPopup: true
    });
  }

  emailPopupSubmit() {
    const { from, subject, message } = this.state;
    postEmail({
      from,
      subject,
      message
    })
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    })

    this.setState({
      ...this.state, ...initialState
    });
  }

  isSubmitEnabled() {
    const {
      from,
      subject,
      message
    } = this.state;
    return isValidEmail(from) && isValidSubject(subject) && isValidMessage(message);
  }


  userIsHirable = () => {
    if (this.props.userData && this.props.userData.isHirable) {
      return (
        <div className="User-Meta-available-container">
          <IconContext.Provider value={{ color: "#8ECCD8" }}>
            <div>
              <FaUserTie />
            </div>
          </IconContext.Provider>
          <span>Available for hire</span>
        </div>
      );
    }
    return '';
  }

  userImg = () => {
    if (this.props.userData && this.props.userData.avatarUrl) {
      return this.props.userData.avatarUrl;
    }
    return userPlaceholderImg;
  }

  userName = () => {
    if (this.props.userData && this.props.userData.name) {
      return this.props.userData.name;
    }
    return 'Github User...';
  }

  userUsername = () => {
    if (this.props.userData && this.props.userData.login) {
      return this.props.userData.login;
    }
    return 'Username...';
  }

  userUrl = () => {
    if (this.props.userData && this.props.userData.url) {
      return this.props.userData.url;
    }
    return 'https://github.com';
  }

  userEmail = () => {
    if (this.props.userData) {
      return this.props.userData.email || (<i>Hidden</i>);
    }
    return 'Email...';
  }

  actionEmail = () => {
    if (this.props.userData && this.props.userData.email) {
      return (
        <p className="User-Meta-profile-action-email">
          <button onClick={this.showEmailPopup}>Email</button>
        </p>
      )
    }
    return null;
  }

  userCompany = () => {
    if (this.props.userData && this.props.userData.company) {
      return (
        <p className="User-Meta-info-company"><span>Company:</span> {this.props.userData.company}</p>
      );
    }
    return '';
  }

  userBio = () => {
    if (this.props.userData) {
      return this.props.userData.bio || 'Bio not provided';
    }
    return 'A bio will be located right here, this exact spot.';
  }

  userLocation = () => {
    if (this.props.userData) {
      if (this.props.userData.location) {
        const locationParam = this.props.userData.location.replace(',', '').replace(/ /g, '+');
        const mapUrl = `https://www.google.com/maps/place/${locationParam}`;
        return (
          <a href={ mapUrl } target="_blank" rel="noopener noreferrer">{ this.props.userData.location }</a>
        );
      }
      return 'Location not provided';
    }
    return 'Location...';
  }

  userWebsite = () => {
    if (this.props.userData) {
      if (this.props.userData.websiteUrl) {
        return (
          <a href={ this.props.userData.websiteUrl } target="_blank" rel="noopener noreferrer">{ this.props.userData.websiteUrl }</a>
        );
      }
      return 'Website not provided';
    }
    return 'Website...';
  }

  render() {
    return (
      <div className="User-Meta col">
        <div className="User-Meta-available">
          { this.userIsHirable() }
        </div>
        <div className="User-Meta-profile">
          <img className="User-Meta-profile-picture" src={ this.userImg() } alt="user" />
          <p className="User-Meta-profile-name">{ this.userName() }</p>
          <p className="User-Meta-profile-username"><a href={ this.userUrl() } target="_blank" rel="noopener noreferrer">{ this.userUsername() }</a></p>
          { this.actionEmail() }
        </div>
        <div className="User-Meta-info">
          <p className="User-Meta-info-email"><span>Email:</span> { this.userEmail() }</p>
          { this.userCompany() }
          <p className="User-Meta-info-bio">{ this.userBio() }</p>
          <div className="User-Meta-info-location">
            <IconContext.Provider value={{ color: "#000" }}>
              <div>
                <FaMapMarkerAlt />
              </div>
            </IconContext.Provider>
            { this.userLocation() }
          </div>
          <p className="User-Meta-info-website">
            { this.userWebsite() }
          </p>
        </div>
        {this.actionEmail() && (
          <div id="User-Meta-email-popup" className="User-Meta-email-popup" style={{ display: this.state.showEmailPopup ? 'flex': 'none' }} onClick={this.popupClicked}>
            <div>
              <div className="User-Meta-email-popup-header">
                <h2 className="User-Meta-email-popup-header-title">Send Email</h2>
              </div>
              <div className="User-Meta-email-popup-body">
                <div>
                  <input className="form-field"
                    type="text"
                    placeholder="From*"
                    name="from"
                    value={this.state.from}
                    onChange={this.handleInputChange} />
                </div>
                <div>
                  <input className="form-field"
                    type="text"
                    placeholder="Subject*"
                    name="subject"
                    value={this.state.subject}
                    onChange={this.handleInputChange}/>
                </div>
                <div>
                  <textarea className="form-field"
                    type="text"
                    rows="5"
                    placeholder="Message*"
                    name="message"
                    value={this.state.message}
                    onChange={this.handleInputChange} />
                </div>
              </div>
              <div className="User-Meta-email-popup-footer">
                <button className="User-Meta-email-popup-footer-button-submit"
                  onClick={this.emailPopupSubmit}
                  disabled={!this.isSubmitEnabled()}>Submit</button>
                <button className="User-Meta-email-popup-footer-button-cancel" onClick={this.closeEmailPopup}>Cancel</button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default HomeUserMeta;
