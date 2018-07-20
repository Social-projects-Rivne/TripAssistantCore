import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import './Map.scss';

const KEY = 'AIzaSyDOPDY3_XTTcJelWP-84Csj5FcIdPUBcDs';

class Map extends Component {
  constructor() {
    super();
    this.state = {
      geolocation: {
        lat: 50.95,
        lng: 30.33
      },
      defaultZoom: 11,
      startPoint: {
        name: null,
        latLng: {
          lat: 50.61771530000001,
          lng: 28.2738698
        }
      },
      endPoint: {
        name: null,
        latLng: {
          lat: 52.61771530000001,
          lng: 26.2738698
        }
      }
    };
    this.containerElement = document.getElementById('map');
    this.google = undefined;
    this.onApiLoad = this.onApiLoad.bind(this);
    this.addMarker = this.addMarker.bind(this);
  }

  componentDidMount() {
    this.getLocation()
      .then(({ coords }) => this.setState({
        geolocation: {
          lat: coords.latitude,
          lng: coords.longitude
        }
      }));
  }

  componentDidUpdate() {
    const { geolocation } = this.state;
    this.addMarker(geolocation);
  }

  onApiLoad = (googleApi) => {
    this.google = googleApi;
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

  addMarker = (latLgn) => {
    const geocoder = new this.google.maps.Geocoder();
    geocoder.geocode({ location: latLgn }, (res) => {
      const map = new this.google.maps.Map(document.getElementById('map'), {
        zoom: 11,
        center: latLgn
      });

      const marker = new this.google.maps.Marker({
        position: latLgn,
        map,
        title: res[0].formatted_address
      });
      return marker;
    });
  }

  calculateRoute = (map, maps) => {
    if (map) {
      const directionsService = new maps.DirectionsService();
      const directionsDisplay = new maps.DirectionsRenderer();
      const { startPoint, endPoint } = this.state;
      const start = new maps.LatLng(startPoint.latLng);
      const end = new maps.LatLng(endPoint.latLng);

      const setNewMap = new maps.Map(document.getElementById('map'), {
        zoom: 7,
        start
      });
      directionsDisplay.setMap(setNewMap);

      const request = {
        origin: start,
        destination: end,
        travelMode: 'DRIVING'
      };

      directionsService.route(request, (result, status) => {
        if (status === 'OK') {
          directionsDisplay.setDirections(result);
        }
      });
    }
  }

  render() {
    const { geolocation, defaultZoom } = this.state;
    return (
      <div id="map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: KEY }}
          center={geolocation}
          defaultZoom={defaultZoom}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={googleApi => this.onApiLoad(googleApi)}
        />
      </div>
    );
  }
}

export default Map;
