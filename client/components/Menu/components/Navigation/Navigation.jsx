import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Navigation.scss';

const MENU_ITEM = [
  { name: 'Profile', path: '/profile' },
  { name: 'History', path: '/history' },
  { name: 'Statistic', path: '/statistic' },
  { name: 'Contacts', path: '/contacts' }
];

const NavigationItem = ({ name, path }) => (
  <li><Link className="navigation_item" to={path}>{name}</Link></li>
);

const Navigation = ({ sidebar }) => (
  <nav className="navigation">
    <ul>
      <li><Link className="navigation_item" to="/" onClick={sidebar}>+</Link></li>
      {MENU_ITEM.map(({ name, path }, i) => <NavigationItem name={name} path={path} key={i} />)}
    </ul>
  </nav>
);

NavigationItem.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired
};

Navigation.propTypes = {
  sidebar: PropTypes.func.isRequired
};

export default Navigation;
