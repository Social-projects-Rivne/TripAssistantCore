import Info from '../pages/Info';
import Profile from '../pages/Profile';
import Dashboard from '../pages/Dashbord';
import Login from '../pages/Login/Login';
import SearchRoute from '../pages/SearchRoute';
import NewTrip from '../pages/NewTrip';

const Routes = [
  {
    path: '/',
    exact: true,
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
