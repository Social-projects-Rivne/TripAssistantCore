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
      userInfo: null,
      carsInfo: [],
      feedbacksInfo: [],
      allHistory: []
    };
    this.USER_ID = sessionStorage.getItem('iduser');
  }

  componentDidMount() {
    this.fetchFeedbacksData();
    this.fetchUserData();
    this.updateCarData();
    this.fetchHistoryData();
  }

  fetchFeedbacksData = () => {
    axios.get(`/api/feedbacks/${this.USER_ID}`)
      .then(({ data }) => this.setState({ feedbacksInfo: data }))
      .catch(e => console.error(e));
  }

  fetchHistoryData = () => {
    axios.get(`/api/trips/${this.USER_ID}/byId`)
      .then(({ data }) => this.setState({ allHistory: data }))
      .catch(e => console.error(e));
  }

  fetchUserData = () => {
    axios.get(`api/user/${this.USER_ID}`)
      .then(({ data }) => this.setState({ userInfo: data[0] }));
  }

  updateCarData = () => {
    axios.get(`api/user/${this.USER_ID}/cars`)
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
              {userInfo && <PersonalInfoCard settings={userInfo} />}
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
