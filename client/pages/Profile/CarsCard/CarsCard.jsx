import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CarCard from './CarCard/CarCard';
import './CarsCard.scss';

class CarsCard extends Component {
  render() {
    const { carsInfo } = this.props;

    return (
      <div className="cars-card__wrap">
        <p className="cars-card__heading">
          Vehicles
          <a href="#!" className="cars-card__add-car">ADD NEW</a>
        </p>
        <div className="cars-card__body">
          {carsInfo.map((carInfo, i) => <CarCard carInfo={carInfo} key={i} id={i} />)}
        </div>
      </div>
    );
  }
}

CarsCard.propTypes = {
  carsInfo: PropTypes.array.isRequired // eslint-disable-line react/forbid-prop-types
};

export default CarsCard;
