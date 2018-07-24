import Map from '../components/Map';
import Info from '../pages/Info';
import Profile from '../pages/Profile';
import Dashbord from '../pages/Dashbord';
import Login from '../pages/Login/Login';
import SearchRoute from '../pages/SearchRoute';

const Routes = [
  {
    path: '/',
    exact: true,
    component: Map
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
  }

];

export default Routes;
