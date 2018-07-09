import React, { Component } from 'react';
import './Profile.scss';
import CarsCard from './CarsCard/CarsCard';
import PersonalInfoCard from './PersonalInfoCard/PersonalInfoCard';

class Profile extends Component {
  constructor() {
    super();

    this.state = {
      userInfo: {},
      carsInfo: []
    };
  }

  componentDidMount() {
    fetch('http://fakecollapse.esy.es/fetch/userData.json')
      .then(res => res.json())
      .then(data => this.setState({
        userInfo: data[0]
      }));

    fetch('http://fakecollapse.esy.es/fetch/userCarsData.json')
      .then(res => res.json())
      .then(data => this.setState({
        carsInfo: data
      }));
  }

  render() {
    const { userInfo, carsInfo } = this.state;

    return (
      <div className="profile">
        <h1 className="profile__header">My Profile</h1>
        <div className="profile-content-wrap">
          <div className="row">
            <div className="col-12 col-md-6">
              <PersonalInfoCard settings={userInfo} />
            </div>
            <div className="col-12 col-md-6">
              <CarsCard carsInfo={carsInfo} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
