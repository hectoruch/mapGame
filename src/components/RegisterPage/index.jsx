import React from 'react';
import Menu from '../Menu';
import $ from 'jquery';
import './style.scss';
import { Router, Route, Link, browserHistory } from 'react-router';

class RegisterPage extends React.Component {

  onSubmitEmail(e) {
    var user = {
      email: $('.email').val(),
      password: $('.password').val()
    };

    firebase.auth().createUserWithEmailAndPassword(user.email, user.password).catch(function(error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode === 'auth/weak-password') {
        $('.message').removeClass('-hidden');
        $('.message').html('The password is too weak.');
      } else {
        $('.message').removeClass('-hidden');
        $('.message').html(errorMessage);
      }
    }).then(function () {
      let user = firebase.auth().currentUser;
      let email;
      if (user != null) {
        email = user.email;
      }
    });
  }

  onSubmitFacebook(e) {
    let providerFacebook = new firebase.auth.FacebookAuthProvider();

    firebase.auth().signInWithPopup(providerFacebook).then(function(result) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      let token = result.credential.accessToken;
      // The signed-in user info.
      let user = result.user;
    }).catch(function(error) {
      // Handle Errors here.
      let errorCode = error.code;
      let errorMessage = error.message;
      // The email of the user's account used.
      let email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      let credential = error.credential;
        // ...
    })
    .then(function () {
      let user = firebase.auth().currentUser;
      let email;
      if (user != null) {
        email = user.email;
        console.log(email);
      }
    });
  }

  render() {
    return (
      <div>
        <Menu />
        <div className="l-register-page">
          <div className="diagonal">{''}</div>
          <form>
            <h2>Sign up</h2>
            <input type="email" className="input -text email" placeholder="Email" />
            <input type="password" className="input -text password" placeholder="Password" />
            <div className="contain-submit">
              <button
                type="button"
                className="butn -facebook"
                onClick={(e) => this.onSubmitFacebook(e)}
              >Facebook!
              </button>
              <button
                type="button"
                className="butn -submit"
                onClick={(e) => this.onSubmitEmail(e)}
              >Sign up!
              </button>
            </div>
            <p>Are you sign up? Sign in <Link to="login">here!</Link></p>
            <div className="message -hidden">{''}</div>
          </form>
        </div>
      </div>
    );
  }

}

export default RegisterPage;
