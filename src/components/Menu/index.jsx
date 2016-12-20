import React from 'react';
import $ from 'jquery';
import './style.scss';
import { Router, Route, Link, browserHistory } from 'react-router';

class Menu extends React.Component{

  render() {
    return (
      <div className="c-menu">
        <nav>
          <div className="contain-buttons">
            <Link to="login" className="butn -submit">Start Game</Link>
            <Link to="login" className="butn -link">Create account</Link>
          </div>
        </nav>
      </div>
    );
  }

}

export default Menu;
