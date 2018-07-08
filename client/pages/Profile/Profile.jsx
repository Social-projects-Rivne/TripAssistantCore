import React, { Component } from 'react';
import './Profile.scss';
import CarCard from './CarCard/CarCard';

class Profile extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      cars: []
    };
  }

  componentDidMount() {
    fetch('http://fakecollapse.esy.es/fetch/userData.json')
      .then(res => res.json())
      .then(data => this.setState({
        name: data[0].name,
        email: data[0].email
      }));

    fetch('http://fakecollapse.esy.es/fetch/userCarsData.json')
      .then(res => res.json())
      .then(data => this.setState({
        cars: data
      }));
  }

  render() {
    const { name, email, cars } = this.state;

    return (
      <div className="profile">
        <h1>Profile</h1>
        <div className="profile__card">
          <img src="http://via.placeholder.com/150x150" className="profile__avatar" alt="avatar" />
          <h2>{name}</h2>
          <p>{email}</p>
        </div>
        {cars.map((car, i) => <CarCard settings={car} key={i} id={i} />)}
      </div>
    );
  }
}

export default Profile;
