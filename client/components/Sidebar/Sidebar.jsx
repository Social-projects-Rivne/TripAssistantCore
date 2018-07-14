import React, { Component } from 'react';
import './Sidebar.scss';

import TripInfo from './components/TripInfo';
import TripPoint from './components/TripPoint';


const POINT = [
  { point: 'A' },
  { point: 'B' }
];


class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tripName: 'New Trip',
      tripDuration: undefined,
      tripTime: undefined,
      tripFuel: undefined
    };

    this.eventChangeName = this.eventChangeName.bind(this);
  }

  eventChangeName({ currentTarget: { textContent } }) {
    this.setState({ tripName: textContent });
  }

  render() {
    const {
      tripName,
      tripDuration,
      tripTime,
      tripFuel
    } = this.state;

    return (
      <div>
        <div className="sidebar">
          <div className="sidebar__header">
            <TripInfo
              className="red accent-1"
              fun={this.eventChangeName}
              name={tripName}
              duration={tripDuration}
              time={tripTime}
              fuel={tripFuel}
            />
            <div className="trip-info_radius">
              <input className="trip-info_radius_input" type="range" min="0" max="100" />
            </div>
          </div>
          { POINT.map(({ point }, i) => <TripPoint point={point} key={i} />) }
        </div>
      </div>
    );
  }
}

export default Sidebar;
