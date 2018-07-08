import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CarCard.scss';

class CarCard extends Component {
  render() {
    const { settings, id } = this.props;
    const {
      name_car: carName,
      tank_volume: tankVolume,
      max_passengers_count: maxPassengerCount,
      avg_gas_cost: avgGasCost,
      baggage_volume: baggageVolume,
      avg_speed: avgSpeed
    } = settings;
    return (
      <form className="profile__car-card" key={id}>
        <input className="profile__input" type="text" defaultValue={carName} />
        <input className="profile__input" type="text" defaultValue={tankVolume} />
        <input className="profile__input" type="text" defaultValue={maxPassengerCount} />
        <input className="profile__input" type="text" defaultValue={avgGasCost} />
        <input className="profile__input" type="text" defaultValue={baggageVolume} />
        <input className="profile__input" type="text" defaultValue={avgSpeed} />
      </form>
    );
  }
}

CarCard.propTypes = {
  settings: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  id: PropTypes.number.isRequired
};

export default CarCard;
