import React, { Component, Fragment } from 'react';
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
      <Fragment>
        <a href="/#" className="waves-effect waves-light btn purple darken-4">Add user</a>
        {userList.length ? <ul className="userlist collection">{userList.map(user => <ListItem {...user} key={user.id} />)}</ul> : <p>No users</p>}
      </Fragment>
    );
  }
}

export default UserList;
