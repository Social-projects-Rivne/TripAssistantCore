import React from 'react';
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

export default Navigation;
