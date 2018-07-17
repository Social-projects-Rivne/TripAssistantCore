import React, { Component } from 'react';
import './TripDescription.scss';
import MainPage from './components/MainPage/MainPage';
import SideBar from './components/SideBar/SideBar';

class TripDescription extends Component {
  render() {
    return (
      <div>
        <MainPage />
        <SideBar />
      </div>
    );
  }
}

export default TripDescription;
