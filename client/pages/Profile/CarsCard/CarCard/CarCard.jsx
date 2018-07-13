import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import axios from 'axios';

import arrowDown from 'images/arrow-down.svg';
import ProfileModal from '../../ProfileModal/ProfileModal';
import './CarCard.scss';

const inputInfo = [['Car name', 'nameCar'], ['Tank Volume', 'tankVolume'], ['Number of passengers', 'maxPassengersCount'], ['Average gas cost', 'avgGasCost'], ['Baggage size, m3', 'baggageVolume'], ['Average speed, km/h', 'avgSpeed']];

const CarInput = ({ inputDefaultValue, inputAdditionalInfo }) => (
  <div className="input-field car-card__col">
    <input className="car-card__input" type="text" name={inputAdditionalInfo[1]} defaultValue={inputDefaultValue} />
    <label className="car-card__label active">{inputAdditionalInfo[0]}</label>
  </div>
);

class CarCard extends Component {
  constructor() {
    super();
    this.state = {
      isActive: false,
      isModalOpen: false
    };
  }

  componentDidMount() {
    const { id } = this.props;
    if (id === 0) this.setState({ isActive: true });
  }

  toggleModal = () => {
    const { isModalOpen } = this.state;
    this.setState({ isModalOpen: !isModalOpen });
  }

  handleDeleteCar = (e) => {
    e.preventDefault();
    const { carInfo: { idCars } } = this.props;
    axios.post('localhost/user/deleteCar', { logs: idCars })
      .then(response => console.log(response))
      .catch(error => console.log(error))
      .then(() => this.toggleModal());
  }

  handleUpdateCar = (e) => {
    e.preventDefault();
    const updateCarinfo = { idCars: e.target.elements.idCars.value };
    inputInfo.forEach((el) => { updateCarinfo[el[1]] = e.target.elements[el[1]].value; });
    console.log(updateCarinfo);
    axios.post('localhost/user/newCar', { logs: updateCarinfo });
  }

  handleAddNewCar = (e) => {
    e.preventDefault();
    const newCarinfo = {};
    inputInfo.forEach((el) => { newCarinfo[el[1]] = e.target.elements[el[1]].value; });
    console.log(newCarinfo);
    axios.post('localhost/user/newCar', { logs: newCarinfo });
  }

  toggleCarCardBody = () => {
    const { isActive } = this.state;
    this.setState({ isActive: !isActive });
  }

  render() {
    const {
      carInfo: {
        idCars, nameCar, tankVolume, maxPassengersCount, avgGasCost, baggageVolume, avgSpeed
      },
      id,
      isAddNew
    } = this.props;
    const { isActive, isModalOpen } = this.state;
    const carInfoArr = [
      nameCar, tankVolume, maxPassengersCount, avgGasCost, baggageVolume, avgSpeed
    ];

    return (
      <div className="car-card__wrap">
        {isAddNew && (
          <button type="button" className="car-card__heading-block" onClick={this.toggleCarCardBody}>
            <span className="car-card__num">{id + 1}</span>
            <span className="car-card__name-p">{nameCar}</span>
            <img className={isActive ? 'car-card__arrow-up' : 'car-card__arrow-down'} src={arrowDown} alt="arrow-down" />
          </button>
        )}
        <ReactCSSTransitionGroup transitionName="slideInOut" transitionEnterTimeout={400} transitionLeaveTimeout={350}>
          {isActive && (
            <div className="car-card__body">
              <form className="car-card__form-wrap" onSubmit={isAddNew ? this.handleUpdateCar : this.handleAddNewCar}>
                {carInfoArr.map((inputDefaultValue, i) => (
                  <CarInput
                    key={i}
                    inputAdditionalInfo={inputInfo[i]}
                    inputDefaultValue={inputDefaultValue}
                  />
                ))}
                {idCars && <input type="hidden" name="idCars" value={idCars} />}
                {isAddNew && <p className="car-card__delete-link"><a href="#!" onClick={this.toggleModal}>Delete this vehicle</a></p>}
                <button type="submit" href="#!" className="car-card__btn-submit">{isAddNew ? 'SAVE CHANGES' : 'ADD'}</button>
              </form>
            </div>
          )}
        </ReactCSSTransitionGroup>
        <ProfileModal toClose={this.toggleModal} isOpen={isModalOpen}>
          <div className="deleteCar-modal" onClick={e => e.stopPropagation()}> {/* eslint-disable-line */}
            <p className="deleteCar-heading">Are you sure you want to delete this vehicle?</p>
            <div className="deleteCar-body">
              <button type="button" href="#!" className="car-card__btn-submit" onClick={this.handleDeleteCar}>Delete</button>
              <button type="button" href="#!" onClick={this.toggleModal} className="car-card__btn-submit">Cancel</button>
            </div>
          </div>
        </ProfileModal>
      </div>
    );
  }
}

CarInput.propTypes = {
  inputDefaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  inputAdditionalInfo: PropTypes.array.isRequired // eslint-disable-line react/forbid-prop-types
};

CarCard.propTypes = {
  carInfo: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  id: PropTypes.number.isRequired,
  isAddNew: PropTypes.bool
};

CarCard.defaultProps = {
  isAddNew: true
};

export default CarCard;
