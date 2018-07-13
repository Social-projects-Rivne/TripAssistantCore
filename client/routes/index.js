import React from 'react';
import Map from '../components/Map';
import Dashbord from '../pages/Dashbord';
import Login from '../pages/Login/Login/Login';
import Register from '../pages/Register/Register/Register';


// Pages exemple.
const Profile = () => <h1>Profile</h1>;
const History = () => <h1>History</h1>;
const Statistic = () => <h1>Statistic</h1>;
const Contacts = () => <h1>Contacts</h1>;
//


const Routes = [
  {
    path: '/',
    exact: true,
    component: Map
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/history',
    component: History
  },
  {
    path: '/statistic',
    component: Statistic
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
  },
  {
    path: '/register',
    component: Register
  }
];

export default Routes;
