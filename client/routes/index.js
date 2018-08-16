import Info from '../pages/Info';
import Profile from '../pages/Profile';
import Dashboard from '../pages/Dashbord';
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
  }
];

export default Routes;
