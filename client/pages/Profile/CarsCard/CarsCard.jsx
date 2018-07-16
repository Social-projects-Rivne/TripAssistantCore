import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import axios from 'axios';
import { toast } from 'materialize-css';

import CarCard from './CarCard/CarCard';
import NewCarCard from './CarCard/NewCarCard';
import './CarsCard.scss';

const inputInfo = [
  ['Car name', 'nameCar', '^[a-zA-Z0-9_.-]*$', 'Please input a string without spaces (no special characters allowed)'],
  ['Tank Volume', 'tankVolume', '^\\d+$', 'Please input positive integer'],
  ['Number of passengers', 'maxPassengersCount', '^\\d+$', 'Please input positive integer'],
  ['Average gas cost', 'avgGasCost', '^\\d+$', 'Please input positive integer'],
  ['Baggage size, m3', 'baggageVolume', '^\\d+$', 'Please input positive integer'],
  ['Average speed, km/h', 'avgSpeed', '^\\d+$', 'Please input positive integer']
];

class CarsCard extends Component {
  constructor() {
    super();
    this.state = {
      addNew: false
    };
  }

  handleAddNewCar = (e) => {
    e.preventDefault();
    const { updateCarData } = this.props;
    const newCarinfo = {};
    inputInfo.forEach((el) => { newCarinfo[el[1]] = e.target.elements[el[1]].value; });
    axios.post('localhost/something', { logs: newCarinfo })
      .then(() => {
        updateCarData();
        toast({ html: 'New vehicle has been added!' });
        this.setState({ addNew: false });
      })
      .catch(() => toast({ html: 'New vehicle has not been added!' }))
      .then(() => {
        updateCarData();
        toast({ html: 'New vehicle has been added!' });
        this.setState({ addNew: false });
      });
  }

  toggleAddNewBtn = () => {
    const { addNew } = this.state;
    this.setState({ addNew: !addNew });
  }

  render() {
    const { carsInfo, updateCarData } = this.props;
    const { addNew } = this.state;

    return (
      <div className="cars-card__wrap">
        <p className="cars-card__heading">
          Vehicles
          <a href="#!" className="cars-card__add-car" onClick={this.toggleAddNewBtn}>{addNew ? 'CANCEL' : 'ADD NEW'}</a>
        </p>
        <div className="cars-card__body">
          <ReactCSSTransitionGroup transitionName="slideInOut" transitionEnterTimeout={400} transitionLeaveTimeout={350}>
            {addNew && <NewCarCard submitHandler={this.handleAddNewCar} inputInfo={inputInfo} />}
          </ReactCSSTransitionGroup>
          {carsInfo.map((carInfo, i) => (
            <CarCard
              updateCarData={updateCarData}
              carInfo={carInfo}
              inputInfo={inputInfo}
              key={i}
              id={i}
            />))}
        </div>
      </div>
    );
  }
}

CarsCard.propTypes = {
  carsInfo: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  updateCarData: PropTypes.func.isRequired
};

export default CarsCard;
