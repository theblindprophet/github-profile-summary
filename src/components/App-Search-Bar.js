import React, { Component } from 'react';
import './App-Search-Bar.css';

class AppSearchBar extends Component {
  render() {
    return (
      <div className="Search-Bar">
        <form className="Search-Bar-form">
          <input className="Search-Bar-form-search" type="text" aria-label="search user" placeholder="Search user"/>
        </form>
      </div>
    );
  }
}

export default AppSearchBar;
