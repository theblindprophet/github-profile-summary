import React, { Component } from 'react';
import { IconContext } from "react-icons";
import { FaSpinner  } from 'react-icons/fa';
import './Home-Search-Bar.css';

class HomeSearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      queuried: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.getUser = this.getUser.bind(this);
    this.getSubmitButton = this.getSubmitButton.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.query && !this.state.queuried) {
      this.setState({
        username: nextProps.query,
        queuried: true
      });
    }
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

  getSubmitButton = () => {
    if (this.props.loadingUser) {
      return (
        <button className="Search-Bar-form-submit" type="submit">
          Search
          <IconContext.Provider value={{ color: "#fff" }}>
            <div>
              <FaSpinner />
            </div>
          </IconContext.Provider>
        </button>
      );
    }
    return (
      <button className="Search-Bar-form-submit" type="submit">
        Search
      </button>
    );
  }

  render() {
    return (
      <div className="Search-Bar row">
        <form className="Search-Bar-form col" onSubmit={this.getUser}>
          <input className="Search-Bar-form-search" type="text" aria-label="search user" placeholder="Search user" value={this.state.username} onChange={this.handleChange}/>
          {this.getSubmitButton()}
        </form>
      </div>
    );
  }
}

export default HomeSearchBar;
