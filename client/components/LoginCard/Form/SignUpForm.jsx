
import React, { Component } from 'react';

class SignUpForm extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      fname: '',
      lname: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({
    target: {
      type,
      checked,
      value,
      name
    }
  }) {
    const valueChecked = type === 'checkbox' ? checked : value;
    this.setState({
      [name]: valueChecked
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    console.log('The form was submitted with the following data:');
    console.log(this.state);
  }

  render() {
    const {
      fname, lname, email, password
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
            />
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
            <input
              type="email"
              id="email"
              className="FormField__Input"
              placeholder="Enter your email"
              name="email"
              value={email}
              onChange={this.handleChange}
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
            />
          </div>
          <div className="FormField">
            <label className="FormField__CheckboxLabel">
              <input
                className="FormField__Checkbox"
                type="checkbox"
                name="hasAgreed"
              />
            </label>
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
