import React, { Component } from 'react';
import { Map, Marker } from 'google-maps-react';
import { toast } from 'materialize-css';
import SideBar from '../../components/Sidebar';
import PreLoader from '../../components/PreLoader';
import { random, colors } from '../../helpers';
import './NewTrip.scss';


class NewTrip extends Component {
  constructor() {
    super();
    this.state = {
      load: true,
      markers: [],
      defaultZoom: 11,
      tripInfo: {
        name: 'New Trip',
        color: colors[random(0, colors.length - 1)]
      }
    };
    this.FLAGS = {
      A: 'A',
      B: 'B'
    };
    this.MAX_POINT_NUMBERS = 2;
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
    if (!markers.length && location) {
      this.addMarkers(location);
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
        toast({ html: 'Your geolocation is desible <br> Please enter your start point' });
      });
    });
    return location;
  };

  setPoints = (latlng, point) => {
    const { A, B } = this.FLAGS;
    if (point === A) {
      this.setState({
        location: {
          lat: latlng.lat,
          lng: latlng.lng
        }
      });
    }
    if (point === B) {
      this.setState({
        end: {
          lat: latlng.lat,
          lng: latlng.lng
        }
      });
    }
  }

  getParsetNameFromGeocode = (data) => {
    const res = [];
    Object.values(data.address_components).map((item) => {
      switch (item.types[0]) {
      case 'route':
        if (item.long_name === 'Unnamed Road') {
          res.toString();
          break;
        }
        res.push(item.long_name);
        break;
      case 'locality':
        res.push(item.long_name);
        break;
      case 'administrative_area_level_2':
        res.push(item.long_name);
        break;
      case 'administrative_area_level_1':
        res.push(item.long_name);
        break;
      default: res.toString();
      }
      return item;
    });
    return res.join(', ');
  }

  getPointName = (startPoint) => {
    const name = new Promise((resolve, reject) => {
      if (!window.google) {
        reject(new Error('API is undefined'));
      }
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ location: startPoint }, res => resolve(
        this.getParsetNameFromGeocode(res[0])
      ));
    });
    return name;
  }

  addMarkers = (latLng, pointFlag) => {
    const { markers } = this.state;
    const { A, B } = this.FLAGS;
    let flag = !markers.length ? A : B;
    if (pointFlag) {
      flag = pointFlag;
      this.setPoints(latLng, pointFlag);
    }
    if (pointFlag === A) {
      this.getPointName(latLng)
        .then(res => this.setState(prevState => prevState.markers.splice(0, 1, {
          name: res,
          title: res,
          position: latLng,
          point: flag
        })));
    } else {
      if (markers.length > 1) {
        this.setState(prevState => prevState.markers.pop());
      }
      this.getPointName(latLng)
        .then(res => this.setState(prevState => prevState.markers.push({
          name: res,
          title: res,
          position: latLng,
          point: flag
        })));
    }
  }

  calculateRoute = () => {
    this.eventLoader();
    if (window.google) {
      const { location, end } = this.state;
      const map = document.getElementById('map');
      const directionsService = new window.google.maps.DirectionsService();
      const directionsDisplay = new window.google.maps.DirectionsRenderer();
      const startPoint = new window.google.maps.LatLng(location);
      const endPoint = new window.google.maps.LatLng(end);
      const setNewMap = new window.google.maps.Map(map, {
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
              start_address: result.routes[0].legs[0].start_address,
              end_address: result.routes[0].legs[0].end_address,
              distance: {
                start: prevState.location,
                end: prevState.end
              }
            },
            load: false
          }));
        }
      });
    }
  }

  eventLoader = () => {
    this.setState(prevState => ({ load: !prevState.load }));
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
    const { load, markers, location, defaultZoom, tripInfo } = this.state;
    return (
      <div className="new-trip">
        <SideBar
          points={markers}
          tripInfo={tripInfo}
          changePoint={this.addMarkers}
          changeName={this.eventChangeName}
          create={markers.length === this.MAX_POINT_NUMBERS}
          calcRouteFn={this.calculateRoute}
        />
        {load && <PreLoader /> }
        <div id="map">
          <Map
            google={window.google}
            center={location}
            zoom={defaultZoom}
            mapType="Terrain"
            onChange={() => this.eventLoader()}
            onReady={() => this.eventLoader()}
          >
            {markers && markers.map(marker => <Marker {...marker} key={marker.name} />)}
          </Map>
        </div>
      </div>
    );
  }
}


export default NewTrip;
