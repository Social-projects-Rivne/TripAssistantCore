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
      <ul className="userlist collection">
        {userList.map(user => <ListItem {...user} key={user.id} />)}
      </ul>
    );
  }
}

export default UserList;
