import React, { Component } from 'react';
import './TripDescription.scss';
import feedbacksData from '../../../public/data/feedbacksData.json';

function searchingFor(term) {
  return function low(feed) {
    return feed.name.toLowerCase().includes(term.toLowerCase()) || !term;
  };
}

class TripDescription extends Component {
  constructor() {
    super();
    this.state = {
      feedbackData: feedbacksData,
      term: ''
    };
    this.searchHandler = this.searchHandler.bind(this);
  }

  resetHandler = () => {
    this.setState({ term: '' });
  }

  searchHandler = (event) => {
    this.setState({ term: event.target.value });
  }

  render() {
    const { feedbackData, term } = this.state;
    return (
      <div className="main-trip">
        <div className="search">
          <form>
            <input
              required
              placeholder="Type which route you want to find"
              type="text"
              onChange={this.searchHandler}
              value={term}
            />
            <button
              className="waves-effect waves-light btn clear"
              type="submit"
              onClick={this.resetHandler}
            >
              Clear!
            </button>
          </form>
        </div>
        <div className="feedbacksData">
          {
            feedbackData.filter(searchingFor(term)).map(feed => (
              <div key={feed.id} className="data">
                <h4>{feed.name}</h4>
                <ul>
                  <li>Rating: {feed.rating}</li>
                  <li>Trip date: {feed.date}</li>
                  <li>Driver/User: {feed.userName}</li>
                </ul>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}
export default TripDescription;
