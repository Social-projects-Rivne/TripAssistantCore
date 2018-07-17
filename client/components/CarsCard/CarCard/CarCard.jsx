import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import axios from 'axios';
import { toast } from 'materialize-css';

import arrowDown from 'images/arrow-down.svg';
import ProfileModal from '../../ProfileModal';
import './CarCard.scss';

const CarInput = ({
  inputDefaultValue,
  inputAdditionalInfo: {
    inputLabel, inputName, inputPattern, inputTitle
  }
}) => (
  <div className="input-field car-card__col">
    <input
      className="car-card__input"
      type="text"
      name={inputName}
      pattern={inputPattern}
      title={inputTitle}
      defaultValue={inputDefaultValue}
      required
    />
    <label className="car-card__label active">{inputLabel}</label>
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
    if (id === 0) { this.setState({ isActive: true }); }
  }

  toggleModal = () => {
    const { isModalOpen } = this.state;
    this.setState({ isModalOpen: !isModalOpen });
  }

  handleDeleteCar = (e) => {
    e.preventDefault();
    const { carInfo: { idCars }, updateCarData } = this.props;
    axios.post('localhost/something', { logs: idCars })
      .then(() => {
        updateCarData();
        toast({ html: 'Vehicle has been deleted!' });
      })
      .catch(() => toast({ html: 'Vehicle has NOT been deleted!' }))
      .then(() => this.toggleModal());
  }

  handleUpdateCar = (e) => {
    e.preventDefault();
    const { inputInfo, updateCarData } = this.props;
    const updateCarinfo = { idCars: e.target.elements.idCars.value };
    inputInfo.forEach((el) => {
      updateCarinfo[el.inputName] = e.target.elements[el.inputName].value;
    });
    axios.post('localhost/something', { logs: updateCarinfo })
      .then(() => {
        updateCarData();
        toast({ html: 'Vehicle has been updated!' });
      })
      .catch(() => toast({ html: 'Vehicle has NOT been updated!' }));
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
      inputInfo
    } = this.props;
    const { isActive, isModalOpen } = this.state;
    const carInfoArr = [
      nameCar, tankVolume, maxPassengersCount, avgGasCost, baggageVolume, avgSpeed
    ];

    return (
      <div className="car-card__wrap">
        <button type="button" className="car-card__heading-block" onClick={this.toggleCarCardBody}>
          <span className="car-card__num">{id + 1}</span>
          <span className="car-card__name-p">{nameCar}</span>
          <img className={isActive ? 'car-card__arrow-up' : 'car-card__arrow-down'} src={arrowDown} alt="arrow-down" />
        </button>
        <ReactCSSTransitionGroup transitionName="slideInOut" transitionEnterTimeout={400} transitionLeaveTimeout={350}>
          {isActive && (
            <div className="car-card__body">
              <form className="car-card__form-wrap" onSubmit={this.handleUpdateCar}>
                {carInfoArr.map((inputDefaultValue, i) => (
                  <CarInput
                    key={i}
                    inputAdditionalInfo={inputInfo[i]}
                    inputDefaultValue={inputDefaultValue}
                  />
                ))}
                <input type="hidden" name="idCars" value={idCars} />
                <p className="car-card__delete-link"><a href="#!" onClick={this.toggleModal}>Delete this vehicle</a></p>
                <button type="submit" href="#!" className="car-card__btn-submit">SAVE CHANGES</button>
              </form>
            </div>
          )}
        </ReactCSSTransitionGroup>
        <ProfileModal toClose={this.toggleModal} isOpen={isModalOpen}>
          <div role="presentation" className="deleteCar-modal" onClick={e => e.stopPropagation()}>
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
  inputAdditionalInfo: PropTypes.objectOf(PropTypes.string).isRequired
};

CarCard.propTypes = {
  carInfo: PropTypes.shape({
    idCars: PropTypes.number,
    nameCar: PropTypes.string,
    tankVolume: PropTypes.number,
    maxPassengersCount: PropTypes.number,
    avgGasCost: PropTypes.number,
    baggageVolume: PropTypes.number,
    avgSpeed: PropTypes.number
  }).isRequired,
  id: PropTypes.number.isRequired,
  inputInfo: PropTypes.arrayOf(PropTypes.object).isRequired,
  updateCarData: PropTypes.func.isRequired
};

export default CarCard;
