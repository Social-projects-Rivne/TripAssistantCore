import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FeedbackCard from './FeedbackCard';
import './FeedbacksCard.scss';

class FeedbacksCard extends Component {
  render() {
    const { feedbacksInfo } = this.props;

    return (
      <div className="feedbacks__wrap">
        <p className="feedbacks__heading">
          Feedbacks
        </p>
        <div className="feedbacks__body">
          {feedbacksInfo.map((feedbackInfo, i) => (
            <FeedbackCard feedbackInfo={feedbackInfo} key={i} id={i} />))}
        </div>
      </div>
    );
  }
}

FeedbacksCard.propTypes = {
  feedbacksInfo: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default FeedbacksCard;
