import React, { Component } from 'react';
import './Profile.scss';

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
        {cars.map(({
          name_car: carName,
          tank_volume: tankVolume,
          max_passengers_count: maxPassengerCount,
          avg_gas_cost: avgGasCost,
          baggage_volume: baggageVolume,
          avg_speed: avgSpeed
        }, i) => (
          <div className="profile__card profile__card-cars" key={i}>
            <input className="profile__input" type="text" defaultValue={carName} />
            <input className="profile__input" type="text" defaultValue={tankVolume} />
            <input className="profile__input" type="text" defaultValue={maxPassengerCount} />
            <input className="profile__input" type="text" defaultValue={avgGasCost} />
            <input className="profile__input" type="text" defaultValue={baggageVolume} />
            <input className="profile__input" type="text" defaultValue={avgSpeed} />
          </div>
        ))}
      </div>
    );
  }
}

export default Profile;
