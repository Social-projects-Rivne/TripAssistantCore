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
  }

  componentDidMount() {
    axios.get('public/data/feedbacksData.json')
      .then(({ data }) => this.setState({ feedbacksInfo: data }));

    axios.get('public/data/allHistory.json')
      .then(({ data }) => this.setState({ allHistory: data }));

    this.fetchUserData();

    this.updateCarData();
  }

  fetchUserData = () => {
    const iduser = sessionStorage.getItem('iduser');
    axios.get(`api/user/${iduser}`)
      .then(({ data }) => this.setState({ userInfo: data[0] }));
  }

  updateCarData = () => {
    const iduser = sessionStorage.getItem('iduser');
    axios.get(`api/user/${iduser}/cars`)
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
