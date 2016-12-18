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
              <Link to="register">About</Link>
            </div>
          </div>
        </header>
      </div>
    );
  }

}

export default HomePage;
