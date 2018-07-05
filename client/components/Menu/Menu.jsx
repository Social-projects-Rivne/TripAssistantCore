import React from 'react';
import PropTypes from 'prop-types';
import Logo from './components/Logo';
import Navigation from './components/Navigation';
import './Menu.scss';

const Menu = ({ sidebar }) => (
  <div className="menu">
    <Logo />
    <Navigation sidebar={sidebar} />
  </div>
);

Menu.propTypes = {
  sidebar: PropTypes.func.isRequired
};

export default Menu;
