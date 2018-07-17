import React, { Component } from 'react';
import './Sidebar.scss';

import { random } from '../../helpers';
import TripInfo from './components/TripInfo';
import TripPoint from './components/TripPoint';

const colors = [
  'red',
  'pink',
  'purple',
  'blue',
  'teal',
  'light-green',
  'lime',
  'orange'
];

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tripInfo: {
        name: 'New Trip',
        duration: undefined,
        time: undefined,
        fuel: undefined,
        color: colors[random(0, colors.length - 1)]
      },
      points: [
        { point: 'Start point', id: 0 },
        { point: 'End point', id: 'last' }
      ]
    };

    this.eventChangeName = this.eventChangeName.bind(this);
    this.eventAddNewPoint = this.eventAddNewPoint.bind(this);
  }

  eventChangeName({ currentTarget: { textContent } }) {
    this.setState({ tripInfo: { name: textContent } });
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
    const { tripInfo, points } = this.state;

    return (
      <div className="sidebar z-depth-4">
        <div className="sidebar__header">
          <TripInfo
            className="red accent-1"
            onSave={this.eventChangeName}
            {...tripInfo}
          />
          <div className="trip-info_radius">
            <p>Search distance from route</p>
            <input className="trip-info_radius_input" type="range" min="0" max="100" />
          </div>
        </div>
        <div className="trip-point collection">
          { points.map(({ point, id }) => (
            <TripPoint
              point={point}
              id={id}
              addPoint={this.eventAddNewPoint}
              key={id}
            />
          ))
          }
        </div>
      </div>
    );
  }
}

export default Sidebar;
