import React from 'react';
import $ from 'jquery';
import './style.scss';
import { Router, Route, Link, browserHistory } from 'react-router';

class RegisterPage extends React.Component {

  onSubmitEmail(e) {
    const email = $('.email').val();
    const password = $('.password').val();
    const userSignUp = true;
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
          <div className="contain-submit">
            <span className="butn -facebook" onClick={(e) => this.onSubmitFacebook(e)}>Facebook!</span>
            <span className="butn -submit" onClick={(e) => this.onSubmitEmail(e)}>Sign up!</span>
          </div>
          <p>Are you sign up? Sign in <Link to="login">here!</Link></p>
          <div className="message -hidden">{''}</div>
        </form>
      </div>
    );
  }

}

export default RegisterPage;
