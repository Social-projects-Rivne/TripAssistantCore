
import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './LoginCard.scss';
import SignUpForm from './Form/SignUpForm';
import SignInForm from './Form/SignInForm';

class LoginCard extends Component {
  render() {
    const { updateIsAuth } = this.props;

    return (
      <div className="Auth_Card">
        <div className="Auth__Aside" />
        <div className="Auth__Form">
          <div className="PageSwitcher">
            <Link to="/login" className="PageSwitcher__Item">Sign In</Link>
            <Link to="/register" className="PageSwitcher__Item">Sign Up</Link>
          </div>
          <Route path="/register" component={SignUpForm} />
          <Route path="/login" render={props => <SignInForm {...props} updateIsAuth={updateIsAuth} />} />
        </div>
      </div>
    );
  }
}

LoginCard.propTypes = {
  updateIsAuth: PropTypes.func.isRequired
};

export default LoginCard;
