
import React, { Component } from 'react';

class SignUpForm extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      name: ''
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
    const { email } = this.state;
    const { password } = this.state;
    return (
      <div className="FormCenter">
        <form className="FormFields" onSubmit={this.handleSubmit}>
          <div className="FormField">
            <label className="FormField__Label">Full Name</label>
            <input
              type="text"
              id="name"
              className="FormField__Input"
              placeholder="Enter your full name"
              name="name"
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
