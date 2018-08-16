import React from 'react';
import PropTypes from 'prop-types';
import { GoogleApiWrapper, Map } from 'google-maps-react';

const KEY = 'AIzaSyBA3gUpJSVxQ3Hu51l3XB7C6fcpObXSQ80'; 

const calculateRoute = (google, startPoint, endPoint) => {
  if (google) {
    const map = document.getElementById('road-view');
    const directionsService = new google.maps.DirectionsService();
    const directionsDisplay = new google.maps.DirectionsRenderer();
    const start = new google.maps.LatLng(startPoint);
    const end = new google.maps.LatLng(endPoint);
    const setNewMap = new google.maps.Map(map, {
      zoom: 7,
      start,
      mapTypeControl: false,
      streetViewControl: false,
      zoomControl: false,
      fullscreenControl: false,
      draggable: false
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
};

const styleBloc = {
  minHeight: 'calc(100vh - 50px)' // need to set up height of element
};


//
// For this componet send in props startPoint & endPoint object with lat, lng property
//
const RoadView = ({ google, startPoint, endPoint }) => (
  <div id="road-view" style={styleBloc}>
    <Map
      style={styleBloc}
      google={google}
      center={startPoint}
      zoom={7}
      onReady={() => calculateRoute(google, startPoint, endPoint)}
    />
  </div>
);

RoadView.propTypes = {
  google: PropTypes.objectOf(PropTypes.any).isRequired,
  startPoint: PropTypes.objectOf(PropTypes.any).isRequired,
  endPoint: PropTypes.objectOf(PropTypes.any).isRequired
};

export default GoogleApiWrapper({
  apiKey: (KEY),
  language: 'en'
})(RoadView);
