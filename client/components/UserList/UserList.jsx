import React, { Component } from 'react';
import axios from 'axios';
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
    axios.get('public/data/userData.json')
      .then(({ data }) => this.setState({ userList: data }));
  }

  render() {
    const { userList } = this.state;
    return (
      <div className="content__wrapper">
        {/* <a href="/#" className="waves-effect waves-light btn purple darken-4">Add user</a> */}
        <ul className="userlist main-card">
          <li className="userlist__header main-card__heading">
            <span>User</span>
            <span>Account Status</span>
            <span>Actions</span>
          </li>
          {userList.map(user => <ListItem {...user} key={user.id} />)}
        </ul>
      </div>
    );
  }
}

export default UserList;
