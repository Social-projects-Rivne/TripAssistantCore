import React, { Component } from 'react';
import './TripDescriptionDetails.scss';
import PropTypes from 'prop-types';

class TripDescriptionDetails extends Component {
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
TripDescriptionDetails.propTypes = {
  feedbackData: PropTypes.string.isRequired
};
export default TripDescriptionDetails;
