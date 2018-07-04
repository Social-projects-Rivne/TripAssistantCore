import React from 'react';
import Logo from './components/Logo';
import Navigation from './components/Navigation';
import './Menu.scss';

const Menu = ({ sidebar }) => (
  <div className="menu">
    <Logo />
    <Navigation sidebar={sidebar} />
  </div>
);

export default Menu;
