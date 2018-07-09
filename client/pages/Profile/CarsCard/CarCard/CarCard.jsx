import React, { Component } from 'react';
import PropTypes from 'prop-types';

import arrowDown from 'images/arrow-down.svg';
import './CarCard.scss';

class CarCard extends Component {
  constructor() {
    super();
    this.state = {
      isActive: false
    };
    this.toggleCarCardBody = this.toggleCarCardBody.bind(this);
  }

  toggleCarCardBody() {
    const { isActive } = this.state;
    this.setState({
      isActive: !isActive
    });
  }

  render() {
    const { carInfo, id } = this.props;
    const { isActive } = this.state;
    const {
      nameCar,
      tankVolume,
      maxPassengersCount,
      avgGasCost,
      baggageVolume,
      avgSpeed
    } = carInfo;

    return (
      <div className="car-card__wrap">
        <button type="button" className="car-card__heading-block" onClick={this.toggleCarCardBody}>
          <span className="car-card__num">{id + 1}</span>
          <span className="car-card__name-p">{nameCar}</span>
          <img className={isActive ? 'car-card__arrow-up' : 'car-card__arrow-down'} src={arrowDown} alt="arrow-down" />
        </button>
        {
          isActive && (
            <div className="car-card__body">
              <form>
                <div className="row">
                  <div className="col-12 col-md-6">
                    <label className="car-card__label">Car name</label>
                    <input className="car-card__input" type="text" defaultValue={nameCar} />
                    <label className="car-card__label">Tank Volume</label>
                    <input className="car-card__input" type="text" defaultValue={tankVolume} />
                    <label className="car-card__label">Number of passengers</label>
                    <input className="car-card__input" type="text" defaultValue={maxPassengersCount} />
                  </div>
                  <div className="col-12 col-md-6">
                    <label className="car-card__label">Average gas cost</label>
                    <input className="car-card__input" type="text" defaultValue={avgGasCost} />
                    <label className="car-card__label">Baggage size, m3</label>
                    <input className="car-card__input" type="text" defaultValue={baggageVolume} />
                    <label className="car-card__label">Average speed, km/h</label>
                    <input className="car-card__input" type="text" defaultValue={avgSpeed} />
                  </div>
                </div>
                <button type="submit" href="#!" className="car-card__btn-submit">SAVE CHANGES</button>
              </form>
            </div>
          )
        }
      </div>
    );
  }
}

CarCard.propTypes = {
  carInfo: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  id: PropTypes.number.isRequired
};

export default CarCard;
