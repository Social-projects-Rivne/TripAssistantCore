import React from 'react';
import PropTypes from 'prop-types';

import DefaultUserpic from 'images/default-userpic.png';

const ActiveRouteCard = ({
  routeData: {
    userPic, name, rating, startPoint, endPoint, date, seats, price, currency
  }
}) => (
  <div className="active-route-card">
    <img src={userPic ? `images/${userPic}` : DefaultUserpic} className="route__userpic" alt="userpic" />
    {name} &nbsp;
    {rating} &nbsp;
    {startPoint} &nbsp;
    {endPoint} &nbsp;
    {date} &nbsp;
    {seats} &nbsp;
    {price} &nbsp;
    {currency}
  </div>
);

ActiveRouteCard.propTypes = {
  routeData: PropTypes.shape({
    name: PropTypes.string,
    rating: PropTypes.number,
    startPoint: PropTypes.string,
    endPoint: PropTypes.string,
    date: PropTypes.string,
    seats: PropTypes.number,
    price: PropTypes.number,
    currency: PropTypes.string
  }).isRequired
};

export default ActiveRouteCard;
