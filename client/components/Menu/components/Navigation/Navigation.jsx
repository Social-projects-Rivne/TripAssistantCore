import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Navigation.scss';
import AddIco from 'images/add.svg';
import UserMenuIco from 'images/user-menu.svg';
import EnvelopeIco from 'images/envelope.svg';
import DashbordIco from 'images/dashbord.svg';

const MENU_ITEM = [
  { name: 'new trip', path: '/new-trip', ico: AddIco },
  { name: 'my profile', path: '/profile', ico: UserMenuIco },
  { name: 'info', path: '/info', ico: EnvelopeIco },
  { name: 'tripdescription', path: '/tripdescription', ico: EnvelopeIco },
  { name: 'dashboard', path: '/dashboard', ico: DashbordIco }
];

const NavigationItem = ({ name, path, ico }) => (
  <li>
    <Link className="navigation_item" to={path}>
      <img src={ico} alt="ico" />
      {name}
    </Link>
  </li>
);

const Navigation = () => (
  <nav className="navigation">
    <ul>
      {MENU_ITEM.map((path, i) => (
        <NavigationItem {...path} key={i} />
      ))}
    </ul>
  </nav>
);

NavigationItem.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  ico: PropTypes.string.isRequired
};

export default Navigation;
