import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import axios from 'axios';
import { toast } from 'materialize-css';

import CarCard from './CarCard';
import NewCarCard from './NewCarCard';
import './CarsCard.scss';

const inputInfo = [
  {
    inputLabel: 'Car name', inputName: 'nameCar', inputPattern: '^[a-zA-Z0-9_.-]*$', inputTitle: 'Please input a string without spaces (no special characters allowed)'
  },
  {
    inputLabel: 'Tank Volume', inputName: 'tankVolume', inputPattern: '^\\d+$', inputTitle: 'Please input positive integer'
  },
  {
    inputLabel: 'Number of passengers', inputName: 'maxPassengersCount', inputPattern: '^\\d+$', inputTitle: 'Please input positive integer'
  },
  {
    inputLabel: 'Average gas cost', inputName: 'avgGasCost', inputPattern: '^\\d+$', inputTitle: 'Please input positive integer'
  },
  {
    inputLabel: 'Baggage size, m3', inputName: 'baggageVolume', inputPattern: '^\\d+$', inputTitle: 'Please input positive integer'
  },
  {
    inputLabel: 'Average speed, km/h', inputName: 'avgSpeed', inputPattern: '^\\d+$', inputTitle: 'Please input positive integer'
  }
];

class CarsCard extends Component {
  constructor() {
    super();
    this.state = {
      addNew: false
    };
  }

  handleAddNewCar = (e) => {
    const idUser = 1;
    e.preventDefault();
    const { updateCarData } = this.props;
    const newCarinfo = {};
    inputInfo.forEach((el) => {
      newCarinfo[el.inputName] = e.target.elements[el.inputName].value;
    });
    axios.post(`api/user/${idUser}/addCar`, { formData: newCarinfo })
      .then(() => {
        updateCarData();
        toast({ html: 'New vehicle has been added!' });
        this.setState({ addNew: false });
      })
      .catch(() => toast({ html: 'New vehicle has NOT been added!' }));
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
  carsInfo: PropTypes.arrayOf(PropTypes.object).isRequired,
  updateCarData: PropTypes.func.isRequired
};

export default CarsCard;
