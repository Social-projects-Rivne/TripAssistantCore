import React from 'react';
import PropTypes from 'prop-types';
import './MapDropdown.scss';

const MapDropdown = ({ position, calcRouteFn }) => {
  const style = position ? {
    display: 'block',
    opacity: position.show,
    top: position.y,
    left: position.x + 290
  } : {};

  return (
    <ul id="dropdown2" className="map-dropdown dropdown-content" style={style}>
      <li><a className="map-dropdown_item" href="#!" onClick={() => calcRouteFn()}>End here</a></li>
    </ul>
  );
};

MapDropdown.propTypes = {
  position: PropTypes.objectOf(PropTypes.any),
  calcRouteFn: PropTypes.func.isRequired
};

MapDropdown.defaultProps = {
  position: undefined
};

export default MapDropdown;
