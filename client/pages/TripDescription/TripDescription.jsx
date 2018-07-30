import React, { Component } from 'react';
import './TripDescription.scss';
import feedbacksData from '../../../public/data/feedbacksData.json';

class TripDescription extends Component {
  constructor() {
    super();
    this.state = {
      feedbackData: feedbacksData
    };
  }

  render() {
    const { feedbackData } = this.state;
    return (
      <div>
        <div className="search">
          <form onSubmit={this.clearInput}>
            <input
              type="text"
            />
            <button
              type="submit"
            >
              <a href="# " className="waves-effect waves-light btn clear">CLEAR</a>
            </button>
          </form>
        </div>
        <div className="feedbacksData">
          {
            feedbackData.map(feed => <div key={feed.id}><h3>{feed.name}</h3></div>)
          }
        </div>
      </div>
    );
  }
}
export default TripDescription;
