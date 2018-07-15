import React from 'react';
import './TripPoint.scss';
import PropTypes from 'prop-types';

const TripPoint = ({ point, id, addPoint }) => (
  <div className="trip-point_item collection-item">
    <h4>{point}</h4>
    {typeof id !== 'string' && <button type="button" onClick={() => addPoint(id)} className="btn-floating halfway-fab waves-effect waves-light teal lighten-1">+</button>}
  </div>
);

TripPoint.propTypes = {
  point: PropTypes.string.isRequired,
  id: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]).isRequired,
  addPoint: PropTypes.func.isRequired
};

export default TripPoint;
