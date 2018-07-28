import React, { Component } from 'react';
import axios from 'axios';


class UserFilter extends Component {
  constructor() {
    super();

    this.state = {
      initialState: []
    };
  }

  sortListASC = () => {
    const { initialState } = this.state;
    this.setState(initialState.sort((a, b) => (a.name.last < b.name.last ? -1 : 1)));
  };

  sortListDESC = () => {
    const { initialState } = this.state;
    this.setState(initialState.sort((a, b) => (a.name.last > b.name.last ? -1 : 1)));
  };

  filterListOnline = () => {
    const { initialState } = this.state;
    this.setState(initialState.filter(person => person.online === true));
  };

  filterListOffline = () => {
    const { initialState } = this.state;
    this.setState(initialState.filter(person => person.online === false));
  };

  filterListActive = () => {
    const { initialState } = this.state;
    this.setState(initialState.filter(person => person.acount_status === true));
  };

  filterListBlock = () => {
    const { initialState } = this.state;
    this.setState(initialState.filter(person => person.acount_status === false));
  };

  initState = () => {
    axios.get('public/data/userData.json')
      .then(({ data }) => this.setState({ initialState: data }));
  };


  render() {
    return (
      <div className="options-list">
        <button onClick={this.initState} type="button" className="waves-effect waves-light btn green darken-4 menu-buttons">Clear filters and sorting</button>
        <p>Sort alphabetically(by last name):</p>
        <button onClick={this.sortListASC} type="button" className="waves-effect waves-light btn green darken-4 menu-buttons">ascending</button>
        <button onClick={this.sortListDESC} type="button" className="waves-effect waves-light btn green darken-4 menu-buttons">descending</button>
        <p>Filter by:</p>
        <button onClick={this.filterListOnline} type="button" className="waves-effect waves-light btn green darken-4 menu-buttons">user is online</button>
        <button onClick={this.filterListOffline} type="button" className="waves-effect waves-light btn green darken-4 menu-buttons">user is offline</button>
        <button onClick={this.filterListActive} type="button" className="waves-effect waves-light btn green darken-4 menu-buttons">user is active</button>
        <button onClick={this.filterListBlock} type="button" className="waves-effect waves-light btn green darken-4 menu-buttons">user is block</button>
      </div>
    );
  }
}

export default UserFilter;
