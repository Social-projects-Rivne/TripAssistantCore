import React from 'react';
import PropTypes from 'prop-types';


const OnlineStatus = ({ status }) => (
  <span className={`userlist-status ${status ? 'online' : 'offline'}`}>{status ? 'Online' : 'Offline'}</span>
);

const AccountStatus = ({ status }) => (
  <span className={`new badge ${status ? 'blue' : 'red darken-4'}`} data-badge-caption={status ? 'Active' : 'Block'} />
);

const UserRole = ({ isModerator }) => (
  <span title="Change user role" className="userlist-role new badge" data-badge-caption={isModerator ? 'Moderator' : 'User'} />
);

const BlockButton = ({ isActive }) => (
  <a href="/#" className={`userlist-block waves-effect waves-light btn-large yellow ${isActive ? 'darken-3' : 'darken-1'}`}>{isActive ? 'Block' : 'Unblock'}</a>
);

const ListItem = ({
  picture,
  name: { first, last },
  online,
  home_point: { city },
  acount_status: acountStatus
}) => (
  <li className="collection-item">
    <div className="userlist-info">
      <div className="userlist-img">
        <img src={picture} alt={first} />
      </div>
      <div className="userlist-column">
        <h4>{`${first} ${last}`}</h4>
        <OnlineStatus status={online} />
      </div>
    </div>
    <div className="userlist-column">
      <span className="userlist-city">City: <b>{city}</b></span>
      <span>Account Status: <AccountStatus status={acountStatus} /></span>
      <span>Role:<UserRole /></span>
    </div>
    <div className="userlist-actions">
      <a href="/#" className="waves-effect waves-light btn-large">View</a>
      <BlockButton isActive={acountStatus} />
      <a href="/#" className="waves-effect waves-light btn-large red darken-2">Delete</a>
    </div>
  </li>
);

OnlineStatus.propTypes = {
  status: PropTypes.bool
};

OnlineStatus.defaultProps = {
  status: false
};

AccountStatus.propTypes = {
  status: PropTypes.bool.isRequired
};

UserRole.propTypes = {
  isModerator: PropTypes.bool
};

UserRole.defaultProps = {
  isModerator: false
};

BlockButton.propTypes = {
  isActive: PropTypes.bool.isRequired
};

ListItem.propTypes = {
  picture: PropTypes.string.isRequired,
  name: PropTypes.shape({
    first: PropTypes.string.isRequired,
    last: PropTypes.string.isRequired
  }).isRequired,
  online: PropTypes.bool.isRequired,
  home_point: PropTypes.shape({
    city: PropTypes.string.isRequired
  }).isRequired,
  acount_status: PropTypes.bool.isRequired
};

export default ListItem;
