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

  componentDidMount() {
    const { carInfo: { isDefault } } = this.props;
    if (isDefault) this.setState({ isActive: true });
  }

  toggleCarCardBody() {
    const { isActive } = this.state;
    this.setState({
      isActive: !isActive
    });
  }

  render() {
    const {
      carInfo: {
        nameCar,
        tankVolume,
        maxPassengersCount,
        avgGasCost,
        baggageVolume,
        avgSpeed
      }, id
    } = this.props;
    const { isActive } = this.state;

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
                    <div className="input-field">
                      <input className="car-card__input" type="text" defaultValue={nameCar} />
                      <label className="car-card__label active">Car name</label>
                    </div>
                    <div className="input-field">
                      <input className="car-card__input" type="text" defaultValue={tankVolume} />
                      <label className="car-card__label active">Tank Volume</label>
                    </div>
                    <div className="input-field">
                      <input className="car-card__input" type="text" defaultValue={maxPassengersCount} />
                      <label className="car-card__label active">Number of passengers</label>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="input-field">
                      <input className="car-card__input" type="text" defaultValue={avgGasCost} />
                      <label className="car-card__label active">Average gas cost</label>
                    </div>
                    <div className="input-field">
                      <input className="car-card__input" type="text" defaultValue={baggageVolume} />
                      <label className="car-card__label active">Baggage size, m3</label>
                    </div>
                    <div className="input-field">
                      <input className="car-card__input" type="text" defaultValue={avgSpeed} />
                      <label className="car-card__label active">Average speed, km/h</label>
                    </div>
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
