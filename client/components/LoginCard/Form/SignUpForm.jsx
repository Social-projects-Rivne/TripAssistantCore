import React, { Component } from 'react';
import { browserHistory } from 'react-router-dom';
import axios from 'axios';
import { sha256 } from 'hash.js';
import { toast } from 'materialize-css';

class SignUpForm extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      fname: '',
      lname: '',
      isEmailExist: false
    };
  }

  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    const { email } = this.state;
    e.preventDefault();
    this.setState({ isEmailExist: false });

    axios.post('api/checkEmailExistence', { email })
      .then(({ data }) => {
        if (data === 'emailExist') {
          this.setState({ isEmailExist: true });
        } else if (data === 'emailDoNotExist') {
          this.registerNewUser();
        }
      })
      .catch(err => console.log(err));
  }

  registerNewUser = () => {
    const { fname, lname, email, password } = this.state;
    const credentials = { fname, lname, email };
    credentials.password = sha256().update(password).digest('hex');
    axios.post('/api/register', credentials)
      .then(({ data }) => {
        if (data === 'registrationSuccesul') {
          toast({ html: 'Please confirm email' });
          browserHistory.push('/login');
        }
      })
      .catch(err => console.log(err));
  }

  render() {
    const {
      fname, lname, email, password, isEmailExist
    } = this.state;
    return (
      <div className="FormCenter">
        <form className="FormFields" onSubmit={this.handleSubmit} id="registrationForm">
          <div className="FormField">
            <label className="FormField__Label">First Name</label>
            <input
              type="text"
              id="fname"
              className="FormField__Input"
              placeholder="Enter your first name"
              name="fname"
              value={fname}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="FormField">
            <label className="FormField__Label">Last Name</label>
            <input
              type="text"
              id="lname"
              className="FormField__Input"
              placeholder="Enter your last name"
              name="lname"
              value={lname}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
            <input
              type="email"
              id="email"
              className={`FormField__Input ${isEmailExist ? 'invalid' : null}`}
              placeholder="Enter your email"
              name="email"
              value={email}
              onChange={this.handleChange}
              required
            />
            {isEmailExist && <span className="helper-text">*Email already exists</span>}
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
            <button className="FormField__Button mr-20" type="submit">Sign Up</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUpForm;
