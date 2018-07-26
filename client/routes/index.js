import React from 'react';
import Info from '../pages/Info';
import Profile from '../pages/Profile';
import Dashboard from '../pages/Dashbord';
import Login from '../pages/Login/Login';
import NewTrip from '../pages/NewTrip';

// Pages example.
const History = () => <h1>History</h1>;
const Statistic = () => <h1>Statistic</h1>;
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
    path: '/info',
    component: Info
  },
  {
    path: '/dashboard',
    component: Dashboard
  },
  {
    path: '/new-trip',
    component: NewTrip
  },
  {
    path: '/login',
    component: Login
  }
];

export default Routes;
