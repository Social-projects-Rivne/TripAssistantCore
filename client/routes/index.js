import React from 'react';
import Map from '../components/Map';
import Profile from '../pages/Profile/Profile';
import Dashbord from '../pages/Dashbord';


// Pages exemple.
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
  }
];

export default Routes;
