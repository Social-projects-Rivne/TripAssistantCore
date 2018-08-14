import React, { Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import { GoogleApiWrapper } from 'google-maps-react';
import './App.scss';
import Routes from './routes';
import Login from './pages/Login';
import Header from './components/Header';
import Menu from './components/Menu';

const PrivateRoute = ({ component: Component, isAuth, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      isAuth === true
        ? <Component {...props} />
        : <Redirect to="/login" />
    )}
  />
);

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
    axios.get('/api/is-auth')
      .then(({ data: { isAuth } }) => this.setState({ isAuth }));
  }

  runLogout = () => {
    axios.get('/api/logout')
      .then(() => this.setState({ isAuth: false }));
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
