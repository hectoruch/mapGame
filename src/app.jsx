import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';

import './styles/index.scss';

import HomePage from './components/homepage';
import RegisterPage from './components/RegisterPage';

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
  </Router>
), document.getElementById('app'));
