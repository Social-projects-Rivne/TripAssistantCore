import React, { Component } from 'react';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';
import PropTypes from 'prop-types';
import SideBar from '../../components/Sidebar';
import MapDropdown from '../../components/MapDropdown';
import { random } from '../../helpers';
import './NewTrip.scss';

const KEY = 'AIzaSyDOPDY3_XTTcJelWP-84Csj5FcIdPUBcDs';

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


class NewTrip extends Component {
  constructor() {
    super();
    this.state = {
      markers: [],
      defaultZoom: 11,
      tripInfo: {
        name: 'New Trip',
        color: colors[random(0, colors.length - 1)]
      }
    };

    this.showDropdown = this.showDropdown.bind(this);
    this.addMarkers = this.addMarkers.bind(this);
    this.eventChangeName = this.eventChangeName.bind(this);
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
    const { location, markers } = this.state;
    if (!markers.length) {
      this.addMarkers(location);
    }
  }

  onClikEvent = (e) => {
    console.log(e);
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
    const { google } = this.props;
    const name = new Promise((resolve, reject) => {
      if (!google) {
        reject(new Error('API is undefined'));
      }
      const geocoder = new google.maps.Geocoder();
      geocoder.geocode({ location: startPoint }, res => resolve(res[0].formatted_address));
    });
    return name;
  }

  addMarkers = (latLng) => {
    const { markers } = this.state;
    if (markers.length > 1) {
      this.setState(prevState => prevState.markers.pop());
    }
    const localName = this.getPointName(latLng);
    localName.then(res => this.setState(prevState => prevState.markers.push({
      name: res,
      title: res,
      position: latLng
    })));
  }

  showDropdown = ({ pixel, latLng }, opacity) => {
    if (pixel) {
      const endPoint = { lat: latLng.lat(), lng: latLng.lng() };
      this.addMarkers(endPoint);
      this.setState({ end: endPoint });
      this.setState({ dropdownPosition: { x: pixel.x, y: pixel.y, show: opacity } });
    } else {
      this.setState({ dropdownPosition: { x: 0, y: 0, show: opacity } });
    }
  }

  calculateRoute = () => {
    if (window.google) {
      const directionsService = new window.google.maps.DirectionsService();
      const directionsDisplay = new window.google.maps.DirectionsRenderer();
      const { location, end } = this.state;
      const startPoint = new window.google.maps.LatLng(location);
      const endPoint = new window.google.maps.LatLng(end);

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
          this.setState(prevState => ({
            tripInfo: {
              ...prevState.tripInfo,
              duration: result.routes[0].legs[0].distance.text,
              time: result.routes[0].legs[0].duration.text,
              distance: {
                start: prevState.location,
                end: prevState.end.point
              }
            }
          }));
        }
      });
      this.showDropdown({}, 0);
    }
  }

  eventChangeName({ currentTarget: { textContent } }) {
    this.setState(prevState => ({
      tripInfo: {
        ...prevState.tripInfo,
        name: textContent
      }
    }));
  }


  render() {
    const { google } = this.props;
    const { markers, location, defaultZoom, dropdownPosition, tripInfo } = this.state;
    return (
      <div className="new-trip">
        <SideBar points={markers} tripInfo={tripInfo} changeName={this.eventChangeName} />
        <div id="map">
          <Map
            google={google}
            center={location}
            zoom={defaultZoom}
            onClick={(t, map, event) => this.showDropdown(event, 1)}
          >
            {markers && markers.map(marker => <Marker {...marker} key={marker.name} />)}
          </Map>
        </div>
        <MapDropdown position={dropdownPosition} calcRouteFn={this.calculateRoute} />
      </div>
    );
  }
}

NewTrip.propTypes = {
  google: PropTypes.objectOf(PropTypes.any).isRequired
};

export default GoogleApiWrapper({
  apiKey: (KEY),
  language: 'en'
})(NewTrip);
