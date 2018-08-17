import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { toast } from 'materialize-css';
import { Redirect } from 'react-router-dom';
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

  saveTrip = (data) => {
    const id = sessionStorage.getItem('iduser');
    axios.post(`/api/trips/${id}/addTrip`, { data })
      .then(() => {
        toast({ html: `Your trip ${data.name} has been added!` });
        setTimeout(() => this.setState({ redirect: true }), 2000);
      })
      .catch(() => toast({ html: `Your trip ${data.name} has NOT been added!` }));
  }

  render() {
    const { tripInfo, changeName, points, changePoint, create, calcRouteFn } = this.props;
    const { start, end, redirect } = this.state;
    if (redirect) {
      return <Redirect to="/profile" />;
    }
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
        <div className="trip-point">
          {!points.length
            ? <TripPoint name={start} point="A" onSave={changePoint} />
            : points.map(point => <TripPoint {...point} key={point.name} onSave={changePoint} />) }
          {points.length < 2 && <TripPoint name={end} point="B" onSave={changePoint} />}
        </div>
        {!tripInfo.distance && create && <a href="#!" className="waves-effect waves-light btn" onClick={calcRouteFn}>Create</a>}
        {tripInfo.distance && <a href="#!" className="waves-effect waves-light btn" onClick={() => this.saveTrip(tripInfo)}>Save</a>}
      </div>
    );
  }
}

Sidebar.propTypes = {
  points: PropTypes.arrayOf(PropTypes.any).isRequired,
  tripInfo: PropTypes.objectOf(PropTypes.any),
  changeName: PropTypes.func.isRequired,
  changePoint: PropTypes.func.isRequired,
  create: PropTypes.bool.isRequired,
  calcRouteFn: PropTypes.func.isRequired
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
