import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './PersonalInfoCard.scss';
import DefaultUserpic from 'images/default-userpic.png';

class PersonalInfoCard extends Component {
  render() {
    const { settings } = this.props;
    const {
      name,
      email,
      userpic,
      rating,
      kmTraveled,
      tripsCount
    } = settings;

    return (
      <div className="personal-info__card">
        <p className="personal-info__heading">Personal Information</p>
        <div className="personal-info__body">
          {
            userpic
              ? <img src={`images/${userpic}`} className="personal-info__userpic" alt="userpic" />
              : <img src={DefaultUserpic} className="personal-info__userpic" alt="userpic" />
          }
          <p className="personal-info__name">{name}</p>
          <p className="personal-info__email">{email}</p>
          <div className="personal-info__divider" />
          <div className="personal-info__stats">
            {
              rating && (
                <p className="personal-indo__stat">
                  <span>{rating}</span>
                  out of 5 rating
                </p>
              )
            }
            {
              tripsCount && (
                <p className="personal-indo__stat">
                  <span>{tripsCount}</span>
                  trips
                </p>
              )
            }
            {
              kmTraveled && (
                <p className="personal-indo__stat">
                  <span>{kmTraveled}</span>
                  km travelled
                </p>
              )
            }
          </div>
        </div>
      </div>
    );
  }
}

PersonalInfoCard.propTypes = {
  settings: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

export default PersonalInfoCard;
