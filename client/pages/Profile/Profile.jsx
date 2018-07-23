import React, { Component } from 'react';
import axios from 'axios';
import './Profile.scss';
import CarsCard from '../../components/CarsCard';
import PersonalInfoCard from '../../components/PersonalInfoCard';
import FeedbacksCard from '../../components/FeedbacksCard';
import HistoryWrap from '../../components/HistoryWrap';

class Profile extends Component {
  constructor() {
    super();

    this.state = {
      userInfo: {}
    };
  }

  updateCarData = () => {
    axios.get('public/data/userCarsData.json')
      .then(({ data }) => this.setState({ carsInfo: data }));
  }

  render() {
    const {
      userInfo, carsInfo, feedbacksInfo, allHistory
    } = this.state;

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
              <CarsCard carsInfo={carsInfo} updateCarData={this.updateCarData} />
              <HistoryWrap allHistory={allHistory} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
