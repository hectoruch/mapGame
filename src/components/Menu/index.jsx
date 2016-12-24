import whiteLogo from './assets/logoWhite.png';
import whiteDark from './assets/mapGame.png';

import React from 'react';
import $ from 'jquery';
import './style.scss';
import { Router, Route, Link, browserHistory } from 'react-router';


class Menu extends React.Component{

  componentDidMount() {
  }

  componentDidUpdate() {
    const menu = document.querySelector('.c-menu');
    if (this.props.scrollTop > 1) {
      menu.classList.add('-white');
    } else {
      menu.classList.remove('-white');
    }
  }

  render() {
    return (
      <div className="c-menu">
        <Link className="-no-underline" to="/">
          <img src={this.props.scrollTop > 1 ? whiteDark : whiteLogo} alt="logo" />
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
