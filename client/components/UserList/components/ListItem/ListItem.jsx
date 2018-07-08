import React from 'react';
import PropTypes from 'prop-types';


const ListItem = ({
  picture, name: { first, last }, online, home_point: { city }, acount_status: acountStatus
}) => (
  <li className="user-list_item">
    <div className="user-list_info">
      <div className="user-list_img">
        <img src={picture} alt={first} />
      </div>
      <div className="user-list_column">
        <h4>{`${first} ${last}`}</h4>
        <span>{online ? 'Online' : 'Offline'}</span>
      </div>
    </div>
    <div className="user-list_column">
      <span>City: {city}</span>
      <span>Account Status: {acountStatus ? 'Enabled' : 'Disable'}</span>
    </div>
    <div className="user-list_actions">
      <button className="user-list_btn" type="button">View</button>
      <button className="user-list_btn" type="button">Block</button>
      <button className="user-list_btn" type="button">Delete</button>
    </div>
  </li>
);

ListItem.propTypes = {
  picture: PropTypes.string.isRequired,
  name: PropTypes.shape({}).isRequired,
  online: PropTypes.bool.isRequired,
  home_point: PropTypes.shape({}).isRequired,
  acount_status: PropTypes.bool.isRequired
};

export default ListItem;
