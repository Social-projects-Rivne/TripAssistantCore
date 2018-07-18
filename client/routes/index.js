import React from 'react';
import Map from '../components/Map';
import Profile from '../pages/Profile';
import Dashbord from '../pages/Dashbord';
import Login from '../pages/Login/Login';
import SearchRoute from '../pages/SearchRoute';


// Pages example.
const Contacts = () => <h1>Contacts</h1>;
//


const Routes = [
  {
    path: '/',
    exact: true,
    component: Map
  },
  {
    path: '/searchRoute',
    component: SearchRoute
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/contacts',
    component: Contacts
  },
  {
    path: '/dashbord',
    component: Dashbord
  },
  {
    path: '/login',
    component: Login
  }
];

export default Routes;
