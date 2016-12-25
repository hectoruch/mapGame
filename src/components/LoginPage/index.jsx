import { Link } from 'react-router';
import $ from 'jquery';
import React from 'react';
import Menu from '../Menu';
import './style.scss';


class LoginPage extends React.Component {

  onSubmit(e) {
    const email = $('.email').val();
    const password = $('.password').val();

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    }).then(function () {
      const user = firebase.auth().currentUser;
      let emailUser = '';
      if (user != null) {
        emailUser = user.email;
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

    });
  }

  render() {
    return (
      <div>
        <Menu />
        <div className="l-login-page">
          <div className="diagonal">{''}</div>
          <form>
            <h2>Sign in</h2>
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
                onClick={(e) => this.onSubmit(e)}
              >Sign in!
              </button>
            </div>
            <p>Not have an account? Sign up <Link to="register">here!</Link></p>
            <div className="message -hidden">{''}</div>
          </form>
        </div>
      </div>
    );
  }

}

export default LoginPage;
