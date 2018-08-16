import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import { sha256 } from 'hash.js';
import './Form.scss';

class SignInForm extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      loginSuccess: false,
      errorMsg: ''
    };
  }

  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { updateIsAuth } = this.props;
    const { email, password } = this.state;
    const passwordHash = sha256().update(password).digest('hex');

    this.setState({ errorMsg: '' });

    axios.post('/api/login', { email, passwordHash })
      .then(({ data: { response } }) => {
        if (response.iduser) {
          sessionStorage.setItem('iduser', response.iduser);
          updateIsAuth();
        } else {
          this.setState({ errorMsg: `*${response}` });
        }
      });
  }

  render() {
    const { email, password, loginSuccess, errorMsg } = this.state;

    if (loginSuccess) {
      return (<Redirect to="/profile" />);
    }

    return (
      <div className="FormCenter">
        <form className="FormFields" onSubmit={this.handleSubmit} id="loginForm">
          <div className="FormField">
            <label className="FormField__Label">E-Mail Address</label>
            <input
              type="email"
              id="email"
              className="FormField__Input"
              placeholder="Enter your email"
              name="email"
              value={email}
              onChange={this.handleChange}
              required
            />
          </div>

          <div className="FormField">
            <label className="FormField__Label">Password</label>
            <input
              type="password"
              id="password"
              className="FormField__Input"
              placeholder="Enter your password"
              name="password"
              value={password}
              onChange={this.handleChange}
              required
            />
          </div>

          <div className="FormField">
            <button className="FormField__Button mr-20" type="submit">Sign In</button> <Link to="/register" className="FormField__Link">Create an account</Link>
          </div>
        </form>
        {errorMsg && <span className="helper-text red-helper-text">{errorMsg}</span>}
      </div>
    );
  }
}

SignInForm.propTypes = {
  updateIsAuth: PropTypes.func.isRequired
};

export default SignInForm;
