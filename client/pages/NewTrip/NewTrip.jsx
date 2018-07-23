import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import SideBar from '../../components/Sidebar';
import MapDropdown from '../../components/MapDropdown';
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
      start: {
        name: 'Enter start point'
      },
      end: {
        name: 'Enter end point'
      }
    };
    this.google = undefined;
    this.onApiLoad = this.onApiLoad.bind(this);
    this.addMarker = this.addMarker.bind(this);
    this.showDropdown = this.showDropdown.bind(this);
  }

  componentDidMount() {
    this.getLocation()
      .then(({ coords }) => this.setState({
        location: {
          lat: coords.latitude,
          lng: coords.longitude
        }
      }));
  }

  componentDidUpdate() {
    const { location, start } = this.state;
    if (location && !start.isSetLocalName) {
      this.addMarker(location);
      this.getPointName(location)
        .then(locName => this.setState({
          start: {
            name: locName,
            isSetLocalName: true
          }
        }));
    }
  }

  onApiLoad = (google) => {
    if (google) {
      // google.maps.event.addListener(google.map, 'click', e => console.log(e));
    }
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

  getPointName = (startPoint) => {
    const name = new Promise((resolve) => {
      if (window.google) {
        const geocoder = new window.google.maps.Geocoder();
        geocoder.geocode({ location: startPoint }, res => resolve(res[0].formatted_address));
      }
    });
    return name;
  }

  showDropdown = ({ pixel, latLng }, opacity) => {
    if (pixel) {
      const endPoint = { lat: latLng.lat(), lng: latLng.lng() };
      this.getPointName(endPoint).then((localName) => {
        this.setState({
          end: {
            name: localName,
            point: endPoint,
            isSetLocalName: true
          }
        });
      });
      this.setState({ dropdownPosition: { x: pixel.x, y: pixel.y, show: opacity } });
    } else {
      this.setState({ dropdownPosition: { x: 0, y: 0, show: opacity } });
    }
  }

  addMarker = (latLgn) => {
    if (window.google) {
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ location: latLgn }, (res) => {
        const map = new window.google.maps.Map(document.getElementById('map'), {
          zoom: 11,
          center: latLgn
        });

        map.addListener('rightclick', e => this.showDropdown(e, 1));
        map.addListener('click', () => this.showDropdown({}, 0));

        const marker = new window.google.maps.Marker({
          position: latLgn,
          map,
          title: res[0].formatted_address
        });
        return marker;
      });
    }
  }

  calculateRoute = () => {
    if (window.google) {
      const directionsService = new window.google.maps.DirectionsService();
      const directionsDisplay = new window.google.maps.DirectionsRenderer();
      const { location, end } = this.state;
      const startPoint = new window.google.maps.LatLng(location);
      const endPoint = new window.google.maps.LatLng(end.point);

      const setNewMap = new window.google.maps.Map(document.getElementById('map'), {
        zoom: 7,
        startPoint
      });
      directionsDisplay.setMap(setNewMap);

      const request = {
        origin: startPoint,
        destination: endPoint,
        travelMode: 'DRIVING'
      };

      directionsService.route(request, (result, status) => {
        if (status === 'OK') {
          directionsDisplay.setDirections(result);
        }
      });
      this.showDropdown({}, 0);
      console.log(window.google);
    }
  }

  render() {
    const { defaultLocation, defaultZoom, start, end, dropdownPosition } = this.state;
    return (
      <div className="new-trip">
        <SideBar start={start} end={end} />
        <div id="map">
          <GoogleMapReact
            bootstrapURLKeys={{ key: KEY }}
            onClick={this.eventClick}
            center={defaultLocation}
            defaultZoom={defaultZoom}
            yesIWantToUseGoogleMapApiInternals
            onGoogleApiLoaded={google => this.onApiLoad(google)}
          />
        </div>
        <MapDropdown position={dropdownPosition} calcRouteFn={this.calculateRoute} />
      </div>
    );
  }
}

export default NewTrip;
