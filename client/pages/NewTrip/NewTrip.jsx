import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import SideBar from '../../components/Sidebar';
import './NewTrip.scss';

const KEY = 'AIzaSyDOPDY3_XTTcJelWP-84Csj5FcIdPUBcDs';


class NewTrip extends Component {
  constructor() {
    super();
    this.state = {
      defaultLocation: {
        lat: 50.95,
        lng: 30.33
      },
      defaultZoom: 11,
      startPoint: {
        latLng: {
          lat: null,
          lng: null
        }
      },
      endPoint: {
        latLng: {
          lat: 52.61771530000001,
          lng: 26.2738698
        }
      }
    };
    this.google = undefined;
    this.onApiLoad = this.onApiLoad.bind(this);
    this.addMarker = this.addMarker.bind(this);
  }

  componentDidMount() {
    this.getLocation()
      .then(({ coords }) => this.setState({
        startPoint: {
          lat: coords.latitude,
          lng: coords.longitude
        }
      }));
  }

  componentDidUpdate() {
    const { startPoint } = this.state;
    this.addMarker(startPoint);
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
    const { defaultLocation, defaultZoom, startPoint } = this.state;
    return (
      <div className="new-trip">
        <SideBar startPoint={startPoint} />
        <div id="map">
          <GoogleMapReact
            bootstrapURLKeys={{ key: KEY }}
            center={defaultLocation}
            defaultZoom={defaultZoom}
            yesIWantToUseGoogleMapApiInternals
            onGoogleApiLoaded={googleApi => this.onApiLoad(googleApi)}
          />
        </div>
      </div>
    );
  }
}

export default NewTrip;
