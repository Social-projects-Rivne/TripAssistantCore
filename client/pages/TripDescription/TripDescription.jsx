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
      <div>
        <div className="search">
          <form>
            <input
              type="text"
              onChange={this.searchHandler}
              value={term}
            />
            <button
              type="submit"
              onClick={this.resetHandler}
            >
              <a href="# " className="waves-effect waves-light btn clear">CLEAR</a>
            </button>
          </form>
        </div>
        <div className="feedbacksData">
          {
            feedbackData.filter(searchingFor(term)).map(feed => (
              <div key={feed.id} className="data">
                <h4>{feed.name}</h4>
                <p>Rating: {feed.rating}</p>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}
export default TripDescription;
