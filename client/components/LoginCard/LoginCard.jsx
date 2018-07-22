
import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './LoginCard.scss';
import SignUpForm from './Form/SignUpForm';
import SignInForm from './Form/SignInForm';
import FacebookAuth from './FacebookAuth';

class LoginCard extends Component {
  render() {
    return (
      <Router basename="/react-auth-ui/">
        <div className="Auth_Card">
          <FacebookAuth />
          <div className="Auth__Aside" />
          <div className="Auth__Form">
            <div className="PageSwitcher">
              <Link to="/login" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</Link>
              <Link exact to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</Link>
            </div>
            <Route exact path="/" component={SignUpForm} />
            <Route path="/login" component={SignInForm} />
            <div className="FormTitle">
              <Link to="/login" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</Link> or <Link exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</Link>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default LoginCard;
