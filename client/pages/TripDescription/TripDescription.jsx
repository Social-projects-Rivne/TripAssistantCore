import React, { Component } from 'react';
import './TripDescription.scss';
import TripDescriptionDetails from './components/TripDescriptionDetails';
import feedbacksData from '../../../public/data/feedbacksData.json';

class TripDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.updateSearch = this.updateSearch.bind(this);
    this.clearInput = this.clearInput.bind(this);
  }

  updateSearch(event) {
    this.setState({ search: event.target.value });
  }

  clearInput() {
    this.setState({ search: '' });
  }

  render() {
    const { search } = this.state;
    return (
      <div>
        <div className="trip-map">Here will be map</div>
        <div className="search">
          <input
            value={search}
            type="text"
            onChange={this.updateSearch}
          />
          <a href="# " className="waves-effect waves-light btn clear" onClick={this.clearInput}>CLEAR</a>
          <a
            className="waves-effect waves-light btn-large submit"
            href="# "
            style={this.styles}
          >
            <i className="material-icons left">Submit</i>button
          </a>
        </div>
        <div className="trips-list">
          {feedbacksData.map((feedbackData, i) => (
            <TripDescriptionDetails feedbackData={feedbackData} key={i} id={i} />
          ))}
        </div>
      </div>
    );
  }
}

export default TripDescription;
