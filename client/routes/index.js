import React from 'react';
import Info from '../pages/Info';
import Profile from '../pages/Profile';
import Dashbord from '../pages/Dashbord';
import Login from '../pages/Login/Login';
import SearchRoute from '../pages/SearchRoute';
import NewTrip from '../pages/NewTrip';



const Home = () => <h1>List of active routes</h1>;


const Routes = [
  {
    path: '/',
    exact: true,
    component: Home
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
    path: '/info',
    component: Info
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
    path: '/new-trip',
    component: NewTrip
  }
];

export default Routes;
