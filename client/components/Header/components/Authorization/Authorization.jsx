import React from 'react';
import { Link } from 'react-router-dom';
import LoginIcon from 'images/user.svg';
import './Authorization.scss';

const Authorization = () => (
  <Link to="/login" className="authorization">
    <img src={LoginIcon} alt="Login" />
  </Link>
);

export default Authorization;
