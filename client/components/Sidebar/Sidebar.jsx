import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Sidebar.scss';

import TripInfo from './components/TripInfo';
import TripPoint from './components/TripPoint';


class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start: 'Enter start point',
      end: 'Enter end point'
    };
  }

  saveDataToLocalStorage = (data) => {
    let tripData = JSON.parse(localStorage.getItem('ActiveRoutes'));
    if (!tripData) tripData = [];
    tripData.push(data);
    localStorage.setItem('ActiveRoutes', JSON.stringify(tripData));
  }

  render() {
    const { tripInfo, changeName, points } = this.props;
    const { start, end } = this.state;
    return (
      <div className="sidebar z-depth-4">
        <div className="sidebar__header">
          <TripInfo
            className="red accent-1"
            onSave={changeName}
            {...tripInfo}
          />
          <div className="trip-info_radius">
            <p>Search distance from route</p>
            <input className="trip-info_radius_input" type="range" min="0" max="100" />
          </div>
        </div>
        <div className="trip-point collection">
          {!points.length
            ? <TripPoint name={start} />
            : points.map(point => <TripPoint {...point} key={point.name} />) }
          {points.length < 2 && <TripPoint name={end} />}
        </div>
        {tripInfo.distance && <a href="#!" className="waves-effect waves-light btn" onClick={() => this.saveDataToLocalStorage(tripInfo)}>Save</a>}
      </div>
    );
  }
}

Sidebar.propTypes = {
  points: PropTypes.arrayOf(PropTypes.any).isRequired,
  tripInfo: PropTypes.objectOf(PropTypes.any),
  changeName: PropTypes.func.isRequired
};

Sidebar.defaultProps = {
  tripInfo: {
    name: 'New Trip',
    duration: undefined,
    time: undefined,
    fuel: undefined,
    color: '#fff'
  }
};

export default Sidebar;
