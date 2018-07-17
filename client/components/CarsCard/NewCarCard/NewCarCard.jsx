import React from 'react';
import PropTypes from 'prop-types';

const CarInput = ({
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
      placeholder="Please enter new value"
      required
    />
    <label className="car-card__label active">{inputLabel}</label>
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
  inputAdditionalInfo: PropTypes.objectOf(PropTypes.string).isRequired
};

NewCarCard.propTypes = {
  submitHandler: PropTypes.func.isRequired,
  inputInfo: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default NewCarCard;
