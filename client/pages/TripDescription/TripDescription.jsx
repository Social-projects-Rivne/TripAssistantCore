import React, { Component } from 'react';
import './TripDescription.scss';
import TripListDetails from './components/TripListDetails';


class TripDescription extends Component {
  constructor() {
    super();
    this.inputHandler = this.inputHandler.bind(this);
  }

  inputHandler = (e) => {
    console.log(e.target.value);
  }

  render() {
    return (
      <div>
        <div className="trip-map">Here will be map</div>
        <div className="search">
          <input type="text" placeholder="Enter a trip which you want to find" onChange={this.inputHandler} />
          <a className="waves-effect waves-light btn-large" href="# " style={this.styles}><i className="material-icons left">Submit</i>button</a>
        </div>
        <div className="trip-list">
          <TripListDetails />
        </div>
      </div>
    );
  }
}

export default TripDescription;
