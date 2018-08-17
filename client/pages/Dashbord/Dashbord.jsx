import React, { Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import UserList from '../../components/UserList';

const Dashbord = () => (
  sessionStorage.getItem('role') === 'admin'
    ? (
      <Fragment>
        <h1 className="main-header">Dashbord</h1>
        <UserList />
      </Fragment>)
    : <Redirect to="/profile" />
);

export default Dashbord;
