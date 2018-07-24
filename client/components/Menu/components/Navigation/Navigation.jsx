import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Navigation.scss';
import AddIco from 'images/add.svg';
import UserMenuIco from 'images/user-menu.svg';
import EnvelopeIco from 'images/envelope.svg';
import DashbordIco from 'images/dashbord.svg';
import SearchIco from 'images/search.svg';

const MENU_ITEM = [
  { name: 'SEARCH ROUTE', path: '/searchRoute', ico: SearchIco },
  { name: 'MY PROFILE', path: '/profile', ico: UserMenuIco },
  { name: 'INFO', path: '/info', ico: EnvelopeIco },
  { name: 'DASHBORD', path: '/dashbord', ico: DashbordIco }
];

const NavigationItem = ({ name, path, ico }) => (
  <li>
    <Link className="navigation_item" to={path}>
      <img src={ico} alt="ico" />
      {name}
    </Link>
  </li>
);

const Navigation = ({ sidebar }) => (
  <nav className="navigation">
    <ul>
      <li>
        <Link className="navigation_item" to="/" onClick={sidebar}>
          <img src={AddIco} alt="add" />
          NEW TRIP
        </Link>
      </li>
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

Navigation.propTypes = {
  sidebar: PropTypes.func.isRequired
};

export default Navigation;
