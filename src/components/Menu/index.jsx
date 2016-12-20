import whiteLogo from './assets/logoWhite.png';

import React from 'react';
import $ from 'jquery';
import './style.scss';
import { Router, Route, Link, browserHistory } from 'react-router';


class Menu extends React.Component{

  render() {
    return (
      <div className="c-menu">
        <Link className="-no-underline" to="/">
          <img src={whiteLogo} alt="logo" />
        </Link>
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
