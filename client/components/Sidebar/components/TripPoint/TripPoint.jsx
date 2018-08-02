import React from 'react';
import Geosuggest from 'react-geosuggest';
import './TripPoint.scss';
import PropTypes from 'prop-types';

const TripPoint = ({ name, point, onSave }) => (
  <div className="trip-point__item">
    {window.google
      ? <Geosuggest name="points" className="trip-point__wrapper" inputClassName="trip-point__input car-card__input" initialValue={name} onSuggestSelect={({ location }) => onSave(location, point)} autoComplete="off" />
      : <h4 className="trip-point__title">{name}</h4>}
  </div>
);

TripPoint.propTypes = {
  name: PropTypes.string.isRequired,
  point: PropTypes.string.isRequired,
  onSave: PropTypes.func.isRequired
};

export default TripPoint;
