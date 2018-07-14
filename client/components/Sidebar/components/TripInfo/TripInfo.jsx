import React from 'react';
import PropTypes from 'prop-types';
import './TripInfo.scss';

const colors = [
  'red',
  'pink',
  'purple',
  'blue',
  'teal',
  'light-green',
  'lime',
  'orange'
];

const random = (min, max) => Math.round(min + Math.random() * (max - min));

const TripInfo = ({
  name, duration, time, fuel, onSave
}) => (
  <div className={`trip-info ${colors[random(0, colors.length)]} accent-1`}>
    <h5 contentEditable="true" suppressContentEditableWarning="true" className="trip-info_title" onBlur={onSave}>{name}</h5>
    <div className="trip-info_icon">
      <span>{duration} km</span>
      <span>{time} h</span>
      <span>$ {fuel}</span>
    </div>
  </div>
);

TripInfo.propTypes = {
  name: PropTypes.string.isRequired,
  duration: PropTypes.string,
  time: PropTypes.string,
  fuel: PropTypes.string,
  onSave: PropTypes.func.isRequired
};

TripInfo.defaultProps = {
  duration: '0',
  time: '0',
  fuel: '0'
};

export default TripInfo;
