import React from 'react';
import $ from 'jquery';
import './style.scss';
import { Router, Route, Link, browserHistory } from 'react-router';

class LoginPage extends React.Component {

  onSubmit(e) {
    const email = $('.email').val();
    const password = $('.password').val();

    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode === 'auth/weak-password') {
        $('.message').removeClass('-hidden');
        $('.message').html('The password is too weak.');
      } else {
        $('.message').removeClass('-hidden');
        $('.message').html(errorMessage);
      }
    });
  }

  render() {
    return (
      <div className="l-login-page">
        <div className="diagonal">{''}</div>
        <form>
          <h2>Sign in</h2>
          <input type="email" className="input -text email" placeholder="Email" />
          <input type="password" className="input -text password" placeholder="Password" />
          <div className="contain-submit">
            <span className="butn -submit" onClick={(e) => this.onSubmit(e)}>Sign in!</span>
          </div>
          <p>Not have an account? Sign up <Link to="register">here!</Link></p>
          <div className="message -hidden">{''}</div>
        </form>
      </div>
    );
  }

}

export default LoginPage;
