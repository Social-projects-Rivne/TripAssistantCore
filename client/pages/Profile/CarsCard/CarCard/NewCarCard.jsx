import React from 'react';
import PropTypes from 'prop-types';

import './CarCard.scss';

const CarInput = ({ inputAdditionalInfo }) => (
  <div className="input-field car-card__col">
    <input
      className="car-card__input"
      type="text"
      name={inputAdditionalInfo[1]}
      pattern={inputAdditionalInfo[2]}
      title={inputAdditionalInfo[3]}
      placeholder="Please enter new value"
      required
    />
    <label className="car-card__label active">{inputAdditionalInfo[0]}</label>
  </div>
);

const NewCarCard = ({ submitHandler, inputInfo }) => (
  <div className="car-card__wrap">
    <div className="car-card__body">
      <form className="car-card__form-wrap" onSubmit={submitHandler}>
        {inputInfo.map((inputDefaultValue, i) => (
          <CarInput key={i} inputAdditionalInfo={inputDefaultValue} />))}
        <button type="submit" href="#!" className="car-card__btn-submit">ADD</button>
      </form>
    </div>
  </div>
);

CarInput.propTypes = {
  inputAdditionalInfo: PropTypes.array.isRequired // eslint-disable-line react/forbid-prop-types
};

NewCarCard.propTypes = {
  submitHandler: PropTypes.func.isRequired,
  inputInfo: PropTypes.array.isRequired // eslint-disable-line react/forbid-prop-types
};

export default NewCarCard;
