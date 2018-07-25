import React, { Component } from 'react';
import './TripDescriptionDetails.scss';
import feedbacksData from '../../../../../public/data/feedbacksData.json';


class TripDescriptionDetails extends Component {
  render() {
    const filterData = feedbacksData.map(feed => <li className="filteredItem">{feed.name}</li>);
    return (
      <ul>
        {filterData}
      </ul>
    );
  }
}
export default TripDescriptionDetails;
