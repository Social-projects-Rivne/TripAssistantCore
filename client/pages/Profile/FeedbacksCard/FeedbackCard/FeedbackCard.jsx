import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import './FeedbackCard.scss';
import arrowDown from 'images/arrow-down.svg';

class FeedbackCard extends Component {
  constructor() {
    super();
    this.state = {
      isActive: false
    };
    this.toggleFeedbackBody = this.toggleFeedbackBody.bind(this);
  }

  toggleFeedbackBody() {
    const { isActive } = this.state;
    this.setState({
      isActive: !isActive
    });
  }

  render() {
    const {
      feedbackInfo: {
        name, rating, feedback, userName, date
      }
    } = this.props;
    const { isActive } = this.state;

    return (
      <div className="feedback__wrap">
        <button type="button" className="feedback__heading-block" onClick={this.toggleFeedbackBody}>
          <span className="feedback__name-p">{name}</span>
          <div className="feedback__right-side">
            <p className="feedback__rating-wrap">
              <span className="feedback__num">{rating}</span>
              out of 5
              <span className="feedback__sec">(passenger’s feedback)</span>
            </p>
            <img className={isActive ? 'feedback__arrow-up' : 'feedback__arrow-down'} src={arrowDown} alt="arrow-down" />
          </div>
        </button>
        <ReactCSSTransitionGroup transitionName="slideInOut" transitionEnterTimeout={400} transitionLeaveTimeout={350}>
          {isActive && (
            <div className="feedback__body">
              <p className="feedback__body-p">{feedback}</p>
              <p className="feedback__body-p2">{userName}</p>
              <p className="feedback__body-p2">{date}</p>
            </div>
          )}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

FeedbackCard.propTypes = {
  feedbackInfo: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

export default FeedbackCard;
