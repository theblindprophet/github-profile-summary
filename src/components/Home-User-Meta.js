import React, { Component } from 'react';
import './Home-User-Meta.css';
import { IconContext } from "react-icons";
import { FaMapMarkerAlt, FaUserTie } from 'react-icons/fa';

class HomeUserMeta extends Component {
  render() {
    // TODO: `.User-Meta-info-location a, the link is formed by https://www.google.com/maps/place/ + location replace commas with spaces`
    // TODO: Hide items if not set
    return (
      <div className="User-Meta col">
        <div className="User-Meta-profile">
          <img className="User-Meta-profile-picture" src="https://avatars2.githubusercontent.com/u/7903413?s=460&v=4" alt="user" />
          <p className="User-Meta-profile-name">Jamie Gross</p>
          <p className="User-Meta-profile-username"><a href="https://github.com/theblindprophet" target="_blank" rel="noopener noreferrer">theblindpropet</a></p>
        </div>
        <div className="User-Meta-info">
          <p className="User-Meta-info-email"><span>Email:</span> theblndprophet@gmail.com</p>
          <p className="User-Meta-info-company"><span>Company:</span> Orangebees</p>
          <p className="User-Meta-info-bio">I love to develop web and mobile applications that allow people to have quicker and more efficient access to the information they need.</p>
          <div className="User-Meta-info-location">
            <IconContext.Provider value={{ color: "#000" }}>
              <div>
                <FaMapMarkerAlt />
              </div>
            </IconContext.Provider>
            <a href="https://www.google.com/maps/place/South+Carolina+USA/" target="_blank" rel="noopener noreferrer">South Carolina, USA</a>
          </div>
          <p className="User-Meta-info-website">
            <a href="https://graspmobiledevelop.com/" target="_blank" rel="noopener noreferrer">https://graspmobiledevelop.com/</a>
          </p>
        </div>
        <div className="User-Meta-available">
          <IconContext.Provider value={{ color: "#962D3E" }}>
            <div>
              <FaUserTie />
            </div>
          </IconContext.Provider>
          <span>Available for hire</span>
        </div>
      </div>
    );
  }
}

export default HomeUserMeta;
