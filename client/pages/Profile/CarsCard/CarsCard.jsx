import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import CarCard from './CarCard/CarCard';
import './CarsCard.scss';

const NewCarInputs = {
  id_cars: undefined,
  nameCar: 'New value',
  tankVolume: 'New value',
  maxPassengersCount: 'New value',
  avgGasCost: 'New value',
  baggageVolume: 'New value',
  avgSpeed: 'New value',
  isDefault: true
};

class CarsCard extends Component {
  constructor() {
    super();
    this.state = {
      addNew: false
    };
  }

  toggleAddNewBtn = () => {
    const { addNew } = this.state;
    this.setState({ addNew: !addNew });
  }

  render() {
    const { carsInfo } = this.props;
    const { addNew } = this.state;

    return (
      <div className="cars-card__wrap">
        <p className="cars-card__heading">
          Vehicles
          <a href="#!" className="cars-card__add-car" onClick={this.toggleAddNewBtn}>{addNew ? 'CANCEL' : 'ADD NEW'}</a>
        </p>
        <div className="cars-card__body">
          <ReactCSSTransitionGroup transitionName="slideInOut" transitionEnterTimeout={400} transitionLeaveTimeout={350}>
            {addNew && <CarCard carInfo={NewCarInputs} isAddNew={false} id={0} />}
          </ReactCSSTransitionGroup>
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
