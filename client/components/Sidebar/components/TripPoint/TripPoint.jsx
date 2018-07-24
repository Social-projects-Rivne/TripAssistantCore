import React from 'react';
import './TripPoint.scss';
import PropTypes from 'prop-types';

const TripPoint = ({ name }) => (
  <div className="trip-point_item collection-item">
    <h4 className="trip-point_title">{name}</h4>
  </div>
);

TripPoint.propTypes = {
  name: PropTypes.string.isRequired
};

export default TripPoint;
