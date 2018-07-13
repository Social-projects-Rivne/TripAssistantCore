
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../../Login/components/LoginCard/Form.scss';
import SignUpForm from './Form/SignUpForm';


class RegisterCard extends Component {
  render() {
    return (
      <div className="Auth_card">
        <div className="Auth__Aside" />
        <div className="Auth__Form">
          <div className="PageSwitcher">
            <Link to="/login" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</Link>
            <Link exact to="/register" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</Link>
          </div>
          <SignUpForm />
          <div className="FormTitle">
            <Link to="/login" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</Link> or <Link exact to="/register" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default RegisterCard;
