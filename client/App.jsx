import React, { Component } from 'react';
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
      <div className="app">
        <Menu sidebar={this.toggleSidebar} />
        {sidebarActive && <Sidebar />}
        <div className="main">
          <Header />
          <Switch>
            {Routes.map((route, i) => <Route {...route} key={i} />)}
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
