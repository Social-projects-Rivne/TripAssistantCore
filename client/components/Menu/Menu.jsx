import React from 'react';
import PropTypes from 'prop-types';
import Navigation from './components/Navigation';
import './Menu.scss';

const Menu = ({ isAuth }) => (
  <div className="menu">
    {isAuth && <Navigation />}
  </div>
);

Menu.propTypes = {
  isAuth: PropTypes.bool.isRequired
};

export default Menu;
