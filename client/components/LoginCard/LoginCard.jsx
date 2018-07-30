
import React, { Component } from 'react';
import {
  HashRouter as Router, Route, Link
} from 'react-router-dom';
import './LoginCard.scss';
import SignUpForm from './Form/SignUpForm';
import SignInForm from './Form/SignInForm';

class LoginCard extends Component {
  render() {
    return (
      <Router>
        <div className="Auth_Card">
          <div className="Auth__Aside" />
          <div className="Auth__Form">
            <div className="PageSwitcher">
              <Link to="/login" className="PageSwitcher__Item">Sign In</Link>
              <Link exact to="/" className="PageSwitcher__Item">Sign Up</Link>
            </div>
            <Route exact path="/" component={SignUpForm} />
            <Route path="/login" component={SignInForm} />
          </div>
        </div>
      </Router>
    );
  }
}

export default LoginCard;
