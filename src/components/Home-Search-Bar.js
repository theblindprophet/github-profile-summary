import React, { Component } from 'react';
import './Home-Search-Bar.css';

class HomeSearchBar extends Component {
  render() {
    return (
      <div className="Search-Bar row">
        <form className="Search-Bar-form col">
          <input className="Search-Bar-form-search" type="text" aria-label="search user" placeholder="Search user"/>
        </form>
      </div>
    );
  }
}

export default HomeSearchBar;
