import React from 'react';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Email: '',
      Password: '',
      Name: ''
    };
  }

  onNameChange = (event) => {
    this.setState({ Name: event.target.value });
  }

  onEmailChange = (event) => {
    this.setState({ Email: event.target.value });
  }

  onPasswordChange = (event) => {
    this.setState({ Password: event.target.value });
  }

  onSubmitSignIn = () => {
    const { Name, Email, Password, loadUser, onRouteChange } = this.state;
    fetch('http://localhost:3000/register', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: Email,
        password: Password,
        name: Name
      })
    })
      .then(response => response.json())
      .then((user) => {
        if (user) {
          loadUser(user);
          onRouteChange('home');
        }
      });
  }

  render() {
    const {
      name, email, password
    } = this.state;
    return (
      <div className="FormCenter">
        <form className="FormFields" onSubmit={this.handleSubmit} id="registrationForm">
          <div className="FormField">
            <label className="FormField__Label">Name</label>
            <input
              type="text"
              id="name"
              className="FormField__Input"
              placeholder="Enter your name"
              name="name"
              value={name}
              onChange={this.onNameChange}
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
            <label className="FormField__CheckboxLabel">
              <input
                className="FormField__Checkbox"
                type="checkbox"
                name="hasAgreed"
              />
            </label>
          </div>
          <div className="FormField">
            <button className="FormField__Button mr-20" onClick={this.onSubmitSignIn} type="submit">Sign Up</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUpForm;
