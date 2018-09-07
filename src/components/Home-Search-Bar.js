import React, { Component } from 'react';
import './Home-Search-Bar.css';

class HomeSearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = { username: '' };

    this.getUser = this.getUser.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    this.setState({ username: event.target.value });
  }

  getUser = (event) => {
    event.preventDefault();
    if (this.state.username) {
      this.props.onSubmit(this.state.username);
    }
  }

  render() {
    return (
      <div className="Search-Bar row">
        <form className="Search-Bar-form col" onSubmit={this.getUser}>
          <input className="Search-Bar-form-search" type="text" aria-label="search user" placeholder="Search user" value={this.state.username} onChange={this.handleChange}/>
          <button className="Search-Bar-form-submit" type="submit">
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default HomeSearchBar;
