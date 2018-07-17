import React from 'react';
import Map from '../components/Map';
import Info from '../pages/Info';
import Dashbord from '../pages/Dashbord';
import TripDescription from '../pages/TripDescription/TripDescription';


// Pages example.
const Profile = () => <h1>Profile</h1>;
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
  }

];

export default Routes;
