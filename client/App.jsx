import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import Routes from './routes';
import Header from './components/Header';
import Menu from './components/Menu';


class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className="main">
          <Menu />
          <div className="content">
            <Switch>
              {Routes.map((route, i) => <Route {...route} key={i} />)}
            </Switch>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
