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
<<<<<<< HEAD
    component: Profile
=======
    component: Profile,
    routes: [
      {
        path: 'profile/tripdescription',
        component: TripDescription
      }
    ]
>>>>>>> 8c0d8844eb99631ab5297ee81b2774a348f083e4
  },
  {
    path: '/info',
    component: Info
  },
  {
    path: '/tripdescription',
    component: TripDescription
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
