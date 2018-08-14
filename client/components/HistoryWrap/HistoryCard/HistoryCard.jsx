import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './HistoryCard.scss';


const HistoryCard = ({ routeName, routeDate, isActive, id }) => (
  <div className={`historyCard ${isActive ? 'is-active' : ''}`}>
    <p className="historyCard__p">
      {routeName} &nbsp;
      <span className="historyCard__p--date">{routeDate}</span>
      {isActive && <span className="historyCard__p--is-active">Active</span>}
    </p>
    <Link to={`tripdescription/${id}`} className="historyCard__btn">VIEW</Link>
  </div>
);


HistoryCard.defaultProps = {
  isActive: false
};

HistoryCard.propTypes = {
  id: PropTypes.number.isRequired,
  routeName: PropTypes.string.isRequired,
  routeDate: PropTypes.string.isRequired,
  isActive: PropTypes.bool
};

export default HistoryCard;
