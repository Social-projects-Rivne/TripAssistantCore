import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import LoginCard from '../../components/LoginCard/LoginCard';

const Login = ({ updateIsAuth, isAuth }) => (
  isAuth ? <Redirect to="/profile" /> : <LoginCard updateIsAuth={updateIsAuth} />
);

Login.propTypes = {
  updateIsAuth: PropTypes.func.isRequired,
  isAuth: PropTypes.bool.isRequired
};

export default Login;
