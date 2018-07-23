import React from 'react';
import PropTypes from 'prop-types';

const ActiveRouteCard = ({
  routeData: {
    name, rating, startPoint, endPoint, date, seats, price, currency
  }
}) => (
  <a href="#!" className="active-route-card">
    <div className="route-card-inner1">
      <p className="route-card-points">{startPoint} - {endPoint}</p>
      <p className="route-card-date">{date}</p>
      <p><span className="route-card-name">{name},</span> <span className="route-card-rating">{rating}</span> <span className="route-card-sec">out of 5</span></p>
    </div>
    <div className="route-card-inner2">
      <p className="mb5">
        <span className="route-card-price">{price}</span>
        <span className="route-card-currency">{currency}</span>
      </p>
      <p className="route-card-seats">{seats} seat(s) available</p>
    </div>
    <span className="route-card-btn" />
  </a>
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
