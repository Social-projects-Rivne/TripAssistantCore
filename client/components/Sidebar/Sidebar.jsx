import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Sidebar.scss';

import TripInfo from './components/TripInfo';
import TripPoint from './components/TripPoint';


class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.eventAddNewPoint = this.eventAddNewPoint.bind(this);
  }

  componentDidUpdate() {

  }

  eventAddNewPoint(elemId) {
    const { points } = this.state;
    const newId = (elemId + 1);
    const newPoint = {
      point: 'Sub point',
      id: newId
    };
    this.setState(points.splice(newId, 0, newPoint));
  }

  render() {
    const { tripInfo, changeName, start, end } = this.props;
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
          <TripPoint
            point={start.name}
            addPoint={this.eventAddNewPoint}
          />
          <TripPoint
            point={end.name}
            addPoint={this.eventAddNewPoint}
          />
        </div>
      </div>
    );
  }
}

Sidebar.propTypes = {
  start: PropTypes.objectOf(PropTypes.any).isRequired,
  end: PropTypes.objectOf(PropTypes.any).isRequired,
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
