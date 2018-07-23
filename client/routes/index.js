import React from 'react';
import Map from '../components/Map';
import Info from '../pages/Info';
import Dashbord from '../pages/Dashbord';
import TripDescription from '../pages/TripDescription/TripDescription';
import Profile from '../pages/Profile';
import Login from '../pages/Login/Login';


// Pages exemple.
const History = () => <h1>History</h1>;
const Statistic = () => <h1>Statistic</h1>;
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
    path: '/info',
    component: Info
  },
  {
    path: '/dashbord',
    component: Dashbord
  },
  {
    path: '/tripdescription',
    component: TripDescription
  },
  {
    path: '/login',
    component: Login
  }

];

export default Routes;
