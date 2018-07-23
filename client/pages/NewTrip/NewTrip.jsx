import React, { Component } from 'react';
import GoogleMap from 'google-map-react';
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
      },
      tripInfo: {
        name: 'New Trip',
        color: colors[random(0, colors.length - 1)]
      }
    };

    this.addMarker = this.addMarker.bind(this);
    this.showDropdown = this.showDropdown.bind(this);
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
    const { defaultLocation, defaultZoom, start, end, dropdownPosition, tripInfo } = this.state;
    return (
      <div className="new-trip">
        <SideBar start={start} end={end} tripInfo={tripInfo} changeName={this.eventChangeName} />
        <div id="map">
          <GoogleMap
            bootstrapURLKeys={{ key: KEY, language: 'en' }}
            center={defaultLocation}
            defaultZoom={defaultZoom}
            yesIWantToUseGoogleMapApiInternals
          />
        </div>
        <MapDropdown position={dropdownPosition} calcRouteFn={this.calculateRoute} />
      </div>
    );
  }
}

export default NewTrip;
