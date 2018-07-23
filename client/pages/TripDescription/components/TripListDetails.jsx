import React, { Component } from 'react';
import './TripListDetails.scss';

class TripListDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { feedbacksData } = this.state;
    return (
      <div>
        <div className="trip-list">
          {feedbacksData}
        </div>
      </div>
    );
  }
}

export default TripListDetails;
