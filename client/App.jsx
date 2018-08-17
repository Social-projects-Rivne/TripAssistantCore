import React, { Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { GoogleApiWrapper } from 'google-maps-react';
import axios from 'axios';
import './App.scss';
import Routes from './routes';
import Login from './pages/Login';
import Header from './components/Header';
import Menu from './components/Menu';

const KEY = 'AIzaSyDWfF4B8J4mmrLGltJfU9XqEauLS8PCarg';

const PrivateRoute = ({ component: Component, isAuth, ...rest }) => {
  const id = window.location.search.substr(1);
  if (id) {
    axios.get(`/api/register/${id}`)
      .then(({ data: { iduser, role } }) => {
        if (iduser) {
          sessionStorage.setItem('iduser', iduser);
          sessionStorage.setItem('role', role);
        }
      })
      .catch(e => console.log(e));
  }
  return (
    <Route
      {...rest}
      render={props => (
        isAuth === true
          ? <Component {...props} />
          : <Redirect to="/login" />
      )}
    />
  );
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isAuth: false
    };
  }

  componentDidMount() {
    this.updateIsAuth();
  }

  updateIsAuth = () => {
    if (sessionStorage.getItem('iduser')) {
      this.setState({ isAuth: true });
    } else {
      this.setState({ isAuth: false });
    }
  }

  runLogout = () => {
    sessionStorage.removeItem('iduser');
    sessionStorage.removeItem('role');
    this.setState({ isAuth: false });
  }

  render() {
    const { isAuth } = this.state;

    return (
      <Fragment>
        <Header isAuth={isAuth} runLogout={this.runLogout} />
        <div className="main">
          <Menu isAuth={isAuth} />
          <div className="content">
            <Switch>
              {Routes.map((route, i) => <PrivateRoute {...route} isAuth={isAuth} key={i} />)}
              <Route path="/(login|register)" render={props => <Login {...props} isAuth={isAuth} updateIsAuth={this.updateIsAuth} />} />
            </Switch>
          </div>
        </div>
      </Fragment>
    );
  }
}

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  isAuth: PropTypes.bool.isRequired
};

export default GoogleApiWrapper({
  apiKey: (KEY),
  language: 'en'
})(App);
