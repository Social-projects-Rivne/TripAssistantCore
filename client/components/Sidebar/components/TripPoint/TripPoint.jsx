import React from 'react';
import './TripPoint.scss';
import PropTypes from 'prop-types';

const TripPoint = ({ point }) => (
  <div className="trip-point_item collection-item">
    <h4 className="trip-point_title">{point}</h4>
  </div>
);

TripPoint.propTypes = {
  point: PropTypes.string.isRequired
};

export default TripPoint;
