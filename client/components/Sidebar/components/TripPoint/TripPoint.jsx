import React from 'react';
import './TripPoint.scss';

const TripPoint = ({ point }) => (
  <div className="trip-point">
    <h4>Point <b>{point}</b></h4>
  </div>
);

export default TripPoint;
