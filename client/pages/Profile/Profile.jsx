import React, { Component } from 'react';
import './Profile.scss';
import CarsCard from './CarsCard/CarsCard';
import PersonalInfoCard from './PersonalInfoCard/PersonalInfoCard';
import FeedbacksCard from './FeedbacksCard/FeedbacksCard';

class Profile extends Component {
  constructor() {
    super();

    this.state = {
      userInfo: {},
      carsInfo: [],
      feedbacksInfo: []
    };
  }

  componentDidMount() {
    fetch('public/userData.json')
      .then(res => res.json())
      .then(data => this.setState({
        userInfo: data[0]
      }));

    fetch('public/userCarsData.json')
      .then(res => res.json())
      .then(data => this.setState({
        carsInfo: data
      }));

    fetch('public/feedbacksData.json')
      .then(res => res.json())
      .then(data => this.setState({
        feedbacksInfo: data
      }));
  }

  render() {
    const { userInfo, carsInfo, feedbacksInfo } = this.state;

    return (
      <div className="profile">
        <h1 className="profile__header">My Profile</h1>
        <div className="profile-content-wrap">
          <div className="row">
            <div className="col-12 col-md-6">
              <PersonalInfoCard settings={userInfo} />
              <FeedbacksCard feedbacksInfo={feedbacksInfo} />
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
