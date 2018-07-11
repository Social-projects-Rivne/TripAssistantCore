import React from 'react';
import Logo from './components/Logo';
import Authorization from './components/Authorization';
import './Header.scss';

const Header = () => (
  <header className="header">
    <Logo />
    <Authorization />
  </header>
);

export default Header;
