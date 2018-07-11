import React from 'react';
import './TripInfo.scss';

const TripInfo = () => (
  <div className="trip-info">
    <h2 className="trip-info_title">New Trip</h2>
    <div className="trip-info_icon">
      <span>200km</span>
      <span>3:30</span>
      <span>$50</span>
    </div>
    <div className="trip-info_radius">
      <input className="trip-info_radius_input" type="range" min="0" max="100" />
    </div>
  </div>
);

export default TripInfo;
