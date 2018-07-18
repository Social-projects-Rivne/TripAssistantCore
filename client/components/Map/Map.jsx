import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import './Map.scss';

const KEY = 'AIzaSyDOPDY3_XTTcJelWP-84Csj5FcIdPUBcDs';

class Map extends Component {
  constructor() {
    super();
    this.state = {
      center: {
        lat: 50.95,
        lng: 30.33
      },
      zoom: 11
    };
  }

  componentWillMount() {
    this.getLocation()
      .then(({ coords }) => this.setState(
        { center: { lat: coords.latitude, lng: coords.longitude } }
      ));
  }

  getLocation = () => {
    const { geolocation } = navigator;

    const location = new Promise((resolve, reject) => {
      if (!geolocation) {
        reject(new Error('Not Supported'));
      }

      geolocation.getCurrentPosition((position) => {
        resolve(position);
      }, () => {
        reject(new Error('Permission denied'));
      });
    });
    return location;
  };

  render() {
    const { center, zoom } = this.state;
    return (
      <div id="map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: KEY }}
          center={center}
          defaultZoom={zoom}
        />
      </div>
    );
  }
}

export default Map;
