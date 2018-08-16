import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import React from 'react';
import PropTypes from 'prop-types';
import './InfoMap.scss';


const KEY = 'AIzaSyBPo6m3oLTozHOupA5V_kbBtxwgqbiVmOs';


export class InfoMap extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    const { google } = this.props;
    return (
      <Map google={google} zoom={14}>

        <Marker
          onClick={this.onMarkerClick}
          name="Current location"
        />

        <InfoWindow onClose={this.onInfoWindowClose}>
          <div>
            <h1>something</h1>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

InfoMap.propTypes = {
  google: PropTypes.objectOf(PropTypes.any).isRequired
};

export default GoogleApiWrapper({
  apiKey: (KEY)
})(InfoMap);
