import React, { Component } from 'react';
import axios from 'axios';
import { toast } from 'materialize-css';
import ListItem from './components/ListItem';
import './UserList.scss';

class UserList extends Component {
  constructor() {
    super();

    this.state = {
      userList: []
    };
  }

  componentDidMount() {
    this.getAllUsers();
  }

  getAllUsers = () => {
    axios.get('/api/allUsers')
      .then(({ data }) => this.setState({ userList: data }));
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

  render() {
    const { userList } = this.state;
    return (
      <div className="content__wrapper userlist__content">
        {/* <a href="/#" className="waves-effect waves-light btn purple darken-4">Add user</a> */}
        <div className="main-card__wrap">
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
