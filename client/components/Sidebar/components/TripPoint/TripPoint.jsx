import React from 'react';
import './TripPoint.scss';
import PropTypes from 'prop-types';

const TripPoint = ({ point }) => (
  <div className="trip-point">
    <h4>Point <b>{point}</b></h4>
  </div>
);

TripPoint.propTypes = {
  point: PropTypes.string.isRequired
};

export default TripPoint;
