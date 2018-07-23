import React, { Component } from 'react';
import './TripDescription.scss';
import TripListDetails from './components/TripListDetails';
import feedbacksData from '../../../public/data/feedbacksData.json';

class TripDescription extends Component {
  render() {
    return (
      <div>
        <div className="trip-map">Here will be map</div>
        <div className="search">
          <input
            type="text"
            placeholder="Enter a trip which you want to find"
            onChange={this.inputHandler}
          />
          <a
            className="waves-effect waves-light btn-large"
            href="# "
            style={this.styles}
          >
            <i className="material-icons left">Submit</i>button
          </a>
        </div>
        <div className="trips-list">
          {feedbacksData.map((feedbackData, i) => (
            <TripListDetails feedbackData={feedbackData} key={i} id={i} />
          ))}
        </div>
      </div>
    );
  }
}

export default TripDescription;
