import React from 'react';
import PropTypes from 'prop-types';
import Navigation from './components/Navigation/Navigation';
import './Menu.scss';

const Menu = ({ sidebar }) => (
  <div className="menu">
    <Navigation sidebar={sidebar} />
  </div>
);

Menu.propTypes = {
  sidebar: PropTypes.func.isRequired
};

export default Menu;
