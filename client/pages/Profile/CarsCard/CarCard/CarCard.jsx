import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import axios from 'axios';
import { toast } from 'materialize-css';

import arrowDown from 'images/arrow-down.svg';
import ProfileModal from '../../ProfileModal/ProfileModal';
import './CarCard.scss';

const CarInput = ({ inputDefaultValue, inputAdditionalInfo }) => (
  <div className="input-field car-card__col">
    <input
      className="car-card__input"
      type="text"
      name={inputAdditionalInfo[1]}
      pattern={inputAdditionalInfo[2]}
      title={inputAdditionalInfo[3]}
      defaultValue={inputDefaultValue}
      required
    />
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
    const { carInfo: { idCars }, updateCarData } = this.props;
    axios.post('localhost/something', { logs: idCars })
      .then(response => console.log(response))
      .catch(error => console.log(error))
      .then(() => {
        this.toggleModal();
        updateCarData();
        toast({ html: 'Vehicle has been deleted!' });
      });
  }

  handleUpdateCar = (e) => {
    e.preventDefault();
    const { inputInfo, updateCarData } = this.props;
    const updateCarinfo = { idCars: e.target.elements.idCars.value };
    inputInfo.forEach((el) => { updateCarinfo[el[1]] = e.target.elements[el[1]].value; });
    axios.post('localhost/something', { logs: updateCarinfo })
      .then(response => console.log(response))
      .catch(error => console.log(error))
      .then(() => {
        updateCarData();
        toast({ html: 'Vehicle has been updated!' });
      });
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
  inputInfo: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  updateCarData: PropTypes.func.isRequired
};

export default CarCard;
