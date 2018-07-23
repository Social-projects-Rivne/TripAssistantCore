import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LoginHOC from 'react-facebook-login-hoc';

const configureLoginProps = {
  scope: 'public_profile',
  xfbml: false,
  cookie: false,
  version: 2.6,
  language: 'en_US',
  appId: '2133026356772190'
};

class FacebookAuth extends Component {
  constructor(props) {
    super(props);

    this.getStatus = this.getStatus.bind(this);
  }

  getStatus(response) {
    if (response.authResponse) {
      this.responseApi.call(this, response.authResponse);
    }
  }

  responseApi = (res) => {
    console.log('token:', res.accessToken);
  }

  checkLoginState() {
    const { fb: { status } } = this.props;
    status(this.getStatus.bind(this));
  }

  loginFacebook() {
    this.login(this.getStatus.bind(this));
  }

  logoutFacebook() {
    this.logout();
  }

  render() {
    return (
      <div>
        <button onClick={this.checkLoginState} type="button">Get Facebook Login Status</button>
        <button onClick={this.loginFacebook} type="button">Facebook Login</button>
        <button onClick={this.logoutFacebook} type="button">Facebook Logout</button>
      </div>
    );
  }
}

FacebookAuth.propTypes = {
  fb: PropTypes.objectOf(PropTypes.func).isRequired
};

export default LoginHOC(configureLoginProps)(FacebookAuth);
