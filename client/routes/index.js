import React from 'react';
import Profile from '../pages/Profile';
import Dashbord from '../pages/Dashbord';
import NewTrip from '../pages/NewTrip';


// Pages exemple.
const History = () => <h1>History</h1>;
const Statistic = () => <h1>Statistic</h1>;
const Contacts = () => <h1>Contacts</h1>;
const Home = () => <h1>List of active routes</h1>;
//


const Routes = [
  {
    path: '/',
    exact: true,
    component: Home
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
    path: '/new-trip',
    component: NewTrip
  }
];

export default Routes;
