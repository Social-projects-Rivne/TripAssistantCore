import React from 'react';
import PropTypes from 'prop-types';
import Authorization from './components/Authorization';
import Logo from './components/Logo';
import './Header.scss';

const Header = ({ isAuth, runLogout }) => (
  <header className="header">
    <Logo />
    {isAuth ? <button type="button" onClick={runLogout} className="logoutBtn">Logout</button> : <Authorization />}
  </header>
);

Header.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  runLogout: PropTypes.func.isRequired
};

export default Header;
