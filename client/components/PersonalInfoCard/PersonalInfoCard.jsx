import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './PersonalInfoCard.scss';
import DefaultUserpic from 'images/default-userpic.png';

class PersonalInfoCard extends Component {
  render() {
    const {
      settings: {
        name, email, userpic, rating, kmTraveled, tripsCount
      }
    } = this.props;

    return (
      <div className="personal-info__card">
        <p className="personal-info__heading">Personal Information</p>
        <div className="personal-info__body">
          <img src={userpic ? `images/${userpic}` : DefaultUserpic} className="personal-info__userpic" alt="userpic" />
          <p className="personal-info__name">{name}</p>
          <p className="personal-info__email">{email}</p>
          <div className="personal-info__divider" />
          <div className="personal-info__stats">
            {rating && (
              <p className="personal-indo__stat">
                <span>{rating}</span>
                out of 5 rating
              </p>)}
            {tripsCount && (
              <p className="personal-indo__stat">
                <span>{tripsCount}</span>
                trips
              </p>)}
            {kmTraveled && (
              <p className="personal-indo__stat">
                <span>{kmTraveled}</span>
                km travelled
              </p>)}
          </div>
        </div>
      </div>
    );
  }
}

PersonalInfoCard.propTypes = {
  settings: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    userpic: PropTypes.string,
    rating: PropTypes.number,
    kmTraveled: PropTypes.number,
    tripsCount: PropTypes.number
  }).isRequired
};

export default PersonalInfoCard;
