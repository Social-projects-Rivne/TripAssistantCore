import React from 'react';
import PropTypes from 'prop-types';

import './HistoryCard.scss';

const HistoryCard = ({ routeName, routeDate, isActive, routeColor }) => (
  <div className={`historyCard lighten-5 ${routeColor} ${isActive ? 'is-active' : ''}`}>
    <p className="historyCard__p">
      {routeName} &nbsp;
      <span className="historyCard__p--date">{
        routeDate
          .split('')
          .splice(0, 10)
          .join('')
          .split('-')
          .reverse()
          .join('/')}
      </span>
      {isActive && <span className="historyCard__p--is-active">Active</span>}
    </p>
    <button type="button" href="#" className="historyCard__btn">VIEW</button>
  </div>
);

HistoryCard.defaultProps = {
  isActive: false
};

HistoryCard.propTypes = {
  routeName: PropTypes.string.isRequired,
  routeDate: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  routeColor: PropTypes.string.isRequired
};

export default HistoryCard;
