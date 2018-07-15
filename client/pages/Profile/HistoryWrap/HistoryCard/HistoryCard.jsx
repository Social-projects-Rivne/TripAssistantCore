import React from 'react';
import PropTypes from 'prop-types';

import './HistoryCard.scss';

const HistoryCard = ({ routeName, routeDate }) => (
  <div className="historyCard">
    <p className="historyCard__p">
      {routeName} &nbsp;
      <span className="historyCard__p--date">{routeDate}</span>
    </p>
    <button type="button" href="#" className="historyCard__btn">VIEW</button>
  </div>
);

HistoryCard.propTypes = {
  routeName: PropTypes.string.isRequired,
  routeDate: PropTypes.string.isRequired
};

export default HistoryCard;
