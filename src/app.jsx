import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';

import './styles/index.scss';

import HomePage from './components/HomePage';
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';
import Profile from './components/Profile';

const App = React.createClass({
  render() {
    return (
      <HomePage />
    );
  }
});

const Register = React.createClass({
  render() {
    return (
      <RegisterPage />
    );
  }
});

render((
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="register" component={Register} />
    <Route path="login" component={LoginPage} />
    <Route path="profile" component={Profile} />
  </Router>
), document.getElementById('app'));
