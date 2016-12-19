import React from 'react';
import $ from 'jquery';
import './style.scss';
import { Router, Route, Link, browserHistory } from 'react-router';

class HomePage extends React.Component{

  render() {
    return (
      <div className="l-home-page">
        <header>
          <div className="diagonal">{''}</div>
          <div className="content">
            <div className="wrap">
              <h1>MapGame</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="contain-button">
                <Link className="butn -submit" to="register">Create MapGame</Link>
                <Link className="butn -link" to="map-start">Start new game</Link>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }

}

export default HomePage;
