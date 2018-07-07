import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Routes from './routes';
import Header from './components/Header';
import Menu from './components/Menu';
import Sidebar from './components/Sidebar';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sidebarActive: false
    };

    this.toggleSidebar = this.toggleSidebar.bind(this);
  }

  toggleSidebar() {
    this.setState(prevState => ({ sidebarActive: !prevState.sidebarActive }));
  }


  render() {
    const { sidebarActive } = this.state;
    return (
      <Fragment>
        <Header />
        <div className="main">
          <Menu sidebar={this.toggleSidebar} />
          {sidebarActive && <Sidebar />}
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
