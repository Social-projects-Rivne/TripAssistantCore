import React from 'react';
import PropTypes from 'prop-types';
import './TripInfo.scss';


const TripInfo = ({
  name, duration, time, fuel, color, onSave
}) => (
  <div className={`trip-info ${color} accent-1`}>
    <h5 contentEditable="true" suppressContentEditableWarning="true" className="trip-info_title" onBlur={onSave}>{name}</h5>
    <div className="trip-info_icon">
      <span>{duration}</span>
      <span>{time}</span>
      <span>$ {fuel}</span>
    </div>
  </div>
);

TripInfo.propTypes = {
  name: PropTypes.string.isRequired,
  duration: PropTypes.string,
  time: PropTypes.string,
  fuel: PropTypes.string,
  color: PropTypes.string.isRequired,
  onSave: PropTypes.func.isRequired
};

TripInfo.defaultProps = {
  duration: '0 км',
  time: '0',
  fuel: '0'
};

export default TripInfo;
