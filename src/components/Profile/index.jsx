import _ from 'underscore';
import React from 'react';
import Menu from '../Menu';
import './style.scss';
// import { Router, Route, Link, browserHistory } from 'react-router';

class Profile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      scrollTop: 0,
      direction: false
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', _.debounce(() => {
      this.setState({ scrollTop: window.pageYOffset });
    }, 1));
  }

  render() {
    return (
      <div>
        <Menu scrollTop={this.state.scrollTop} />
        <div className="diagonal">{''}</div>
        <div className="l-profile-page wrap">
          <h1>Hi! This is your profile.</h1>
          <div className="tabs">
            <button type="button" className="-selected">My maps</button>
            <button type="button">Games I´ve played</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
