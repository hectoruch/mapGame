import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import './styles/index.scss';

import HomePage from './components/HomePage';
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';
import Profile from './components/Profile';

render((
  <Router history={browserHistory}>
    <Route path="/" component={HomePage} />
    <Route path="register" component={RegisterPage} />
    <Route path="login" component={LoginPage} />
    <Route path="profile" component={Profile} />
  </Router>
), document.getElementById('app'));
