import React from 'react';
import { Link } from 'react-router-dom';
import './Form.scss';

class SignInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Email: '',
      Password: ''
    };
  }

  onEmailChange = (event) => {
    this.setState({ Email: event.target.value });
  }

  onPasswordChange = (event) => {
    this.setState({ Password: event.target.value });
  }

  onSubmitSignIn = () => {
    const { Email, Password, loadUser, onRouteChange } = this.state;
    fetch('http://localhost:3000/signin', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: Email,
        password: Password
      })
    })
      .then(response => response.json())
      .then((user) => {
        if (user.id) {
          loadUser(user);
          onRouteChange('home');
        }
      });
  }

  render() {
    const { email, password } = this.state;
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
              onChange={this.onEmailChange}
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
              onChange={this.onPasswordChange}
            />
          </div>

          <div className="FormField">
            <button className="FormField__Button mr-20" onClick={this.onSubmitSignIn} type="submit">Sign In</button> <Link to="/" className="FormField__Link">Create an account</Link>
          </div>
        </form>
      </div>
    );
  }
}

export default SignInForm;
