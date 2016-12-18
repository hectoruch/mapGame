import React from 'react';
import $ from 'jquery';
import './style.scss';
import { Router, Route, Link, browserHistory } from 'react-router';

class RegisterPage extends React.Component {

  onSubmit(e) {
    const email = $('.email').val();
    const password = $('.password').val();

    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode == 'auth/weak-password') {
        alert('The password is too weak.');
      } else {
        alert(errorMessage);
      }
        console.log(error);
      // ...
    });
  }

  render() {
    return (
      <div className="l-register-page">
        <div className="diagonal">{''}</div>
        <form>
          <h2>Sign up</h2>
          <input type="email" className="input -text email" placeholder="Email" />
          <input type="password" className="input -text password" placeholder="Password" />
          <span className="butn -submit" onClick={(e) => this.onSubmit(e)}>Sign up!</span>
        </form>
      </div>
    );
  }

}

export default RegisterPage;
