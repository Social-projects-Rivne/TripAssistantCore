import React, { Component } from 'react';
import axios from 'axios';
import './Profile.scss';
import CarsCard from './CarsCard/CarsCard';
import PersonalInfoCard from './PersonalInfoCard/PersonalInfoCard';
import FeedbacksCard from './FeedbacksCard/FeedbacksCard';
import HistoryWrap from './HistoryWrap/HistoryWrap';

class Profile extends Component {
  constructor() {
    super();

    this.state = {
      userInfo: {},
      carsInfo: [],
      feedbacksInfo: [],
      allHistory: []
    };
  }

  componentDidMount() {
    axios.get('public/data/profileUserData.json')
      .then(({ data }) => this.setState({ userInfo: data[0] }));

    axios.get('public/data/userCarsData.json')
      .then(({ data }) => this.setState({ carsInfo: data }));

    axios.get('public/data/feedbacksData.json')
      .then(({ data }) => this.setState({ feedbacksInfo: data }));

    axios.get('public/data/allHistory.json')
      .then(({ data }) => this.setState({ allHistory: data }));
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
              <CarsCard carsInfo={carsInfo} />
              <HistoryWrap allHistory={allHistory} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
