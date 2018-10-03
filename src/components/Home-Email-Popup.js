import React, { Component } from 'react';
import './Home-Email-Popup.css';
import { IconContext } from "react-icons";
import { FaSpinner} from 'react-icons/fa';
import { postEmail } from '../services/api';

const initialState = {
  from: '',
  subject: '',
  message: '',
  loading: false
};

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

class HomeEmailPopup extends Component {
  constructor(props) {
    super(props);
    
    this.state = initialState;

    this.popupClicked = this.popupClicked.bind(this);
    this.closeEmailPopup = this.closeEmailPopup.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.emailPopupSubmit = this.emailPopupSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.query && !this.state.queuried) {
      this.setState({
        username: nextProps.query,
        queuried: true
      });
    }
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
    this.props.close();
  }

  emailPopupSubmit() {
    const { from, subject, message } = this.state;
    postEmail({
      from,
      subject,
      message
    })
    .then(res => {
      this.setState({
        ...this.state, ...initialState
      });
    })
    .catch(err => {
      
    })

    this.setState({
      loading: false
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

  render() {
    return (
      <div id="User-Email-Popup-email-popup" className="User-Email-Popup-email-popup" style={{ display: this.props.show ? 'flex': 'none' }} onClick={this.popupClicked}>
        <div>
          <div className="User-Email-Popup-email-popup-header">
            <h2 className="User-Email-Popup-email-popup-header-title">Send Email</h2>
          </div>
          <div className="User-Email-Popup-email-popup-body">
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
          <div className="User-Email-Popup-email-popup-footer">
            <button className="User-Email-Popup-email-popup-footer-button-submit"
              onClick={this.emailPopupSubmit}
              disabled={!this.isSubmitEnabled()}>Submit
              {this.state.loading && <IconContext.Provider value={{ color: "#fff" }}>
                <div>
                  <FaSpinner />
                </div>
              </IconContext.Provider>}
            </button>
            <button className="User-Email-Popup-email-popup-footer-button-cancel" onClick={this.closeEmailPopup}>Cancel</button>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeEmailPopup;
