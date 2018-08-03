import React from 'react';
import Info from '../pages/Info';
import Profile from '../pages/Profile';
import Dashboard from '../pages/Dashbord';
import Login from '../pages/Login/Login';
import SearchRoute from '../pages/SearchRoute';
import NewTrip from '../pages/NewTrip';
import TripDescription from '../components/TripDescription/TripDescription';

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
    component: Profile,
    routes: [
      {
        path: 'profile/tripdescription',
        component: TripDescription
      }
    ]
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
