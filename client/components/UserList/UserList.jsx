import React, { Component } from 'react';
import axios from 'axios';
import { toast } from 'materialize-css';
import ListItem from './components/ListItem';
import './UserList.scss';

class UserList extends Component {
  constructor() {
    super();

    this.state = {
      userList: [],
      initialState: []
    };
  }

  componentDidMount() {
    this.getAllUsers();
  }

  getAllUsers = () => {
    axios.get('/api/allUsers')
      .then(({ data }) => this.setState({ userList: data, initialState: data }));
  }

  setUserStatus = (id, status) => {
    axios.post('/api/user/unblock', { iduser: id, status })
      .then(() => {
        toast({ html: 'Account had been blocked' });
        this.getAllUsers();
      })
      .catch(err => console.log(err));
  }

  deleteUser = (id) => {
    axios.post('/api/user/delete', { iduser: id })
      .then(() => {
        toast({ html: 'Account had been deleted' });
        this.getAllUsers();
      })
      .catch(err => console.log(err));
  }

  sortListASC = () => {
    const { initialState } = this.state;
    this.setState({ userList: initialState.sort((a, b) => (a.name.last < b.name.last ? -1 : 1)) });
  };

  sortListDESC = () => {
    const { initialState } = this.state;
    this.setState({ userList: initialState.sort((a, b) => (a.name.last > b.name.last ? -1 : 1)) });
  };

  filterListActive = () => {
    const { initialState } = this.state;
    this.setState({ userList: initialState.filter(person => person.acount_status === true) });
  };

  filterListBlock = () => {
    const { initialState } = this.state;
    this.setState({ userList: initialState.filter(person => person.acount_status === false) });
  };

  initState = () => {
    this.getAllUsers();
  };

  render() {
    const { userList } = this.state;
    return (
      <div className="content__wrapper userlist__content">
        {/* <a href="/#" className="waves-effect waves-light btn purple darken-4">Add user</a> */}
        <div className="main-card__wrap">
          <div className="options-list">
            <a href="#!" className="filter-button" onClick={this.initState}>Clear filters and sorting</a>
            <p className="filter-title">Sort alphabetically(by last name):</p>
            <a href="#!" className="filter-button" onClick={this.sortListASC}>Ascending</a>
            <a href="#!" className="filter-button" onClick={this.sortListDESC}>Descending</a>
            <p className="filter-title">Filter by:</p>
            <a href="#!" className="filter-button" onClick={this.filterListActive}>User is active</a>
            <a href="#!" className="filter-button" onClick={this.filterListBlock}>User is block</a>
          </div>
          <div className="userlist__header main-card__heading">
            <span>User</span>
            <span>Actions</span>
          </div>
          <div className="userlist main-card__body">
            {userList.map((user, i) => (
              <ListItem
                {...user}
                setUserStatus={this.setUserStatus}
                deleteUser={this.deleteUser}
                key={i}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default UserList;
