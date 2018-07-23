import React, { Component } from 'react';
import './TripListDetails.scss';
import PropTypes from 'prop-types';

class TripListDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { feedbackData } = this.props;
    return (
      <div className="triplist-wrapper">
        <div className="feedback-userName">
          {feedbackData.userName}
        </div>
        <div className="feedback-name">
          {feedbackData.name}
        </div>
        <div className="feedback-rating">
          {feedbackData.rating}
        </div>
      </div>
    );
  }
}
TripListDetails.propTypes = {
  feedbackData: PropTypes.element.isRequired
};
export default TripListDetails;
