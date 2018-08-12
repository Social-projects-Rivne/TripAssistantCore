
import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './LoginCard.scss';
import SignUpForm from './Form/SignUpForm';
import SignInForm from './Form/SignInForm';

class LoginCard extends Component {
  render() {
    return (
      <div className="Auth_Card">
        <div className="Auth__Aside" />
        <div className="Auth__Form">
          <div className="PageSwitcher">
            <Link to="/login" className="PageSwitcher__Item">Sign In</Link>
            <Link to="/register" className="PageSwitcher__Item">Sign Up</Link>
          </div>
          <Route path="/register" component={SignUpForm} />
          <Route path="/login" component={SignInForm} />
        </div>
      </div>
    );
  }
}

export default LoginCard;
