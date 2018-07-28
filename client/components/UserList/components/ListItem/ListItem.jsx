import React from 'react';
import PropTypes from 'prop-types';


const OnlineStatus = ({ status }) => (
  <span className={`userlist__status ${status ? 'online' : 'offline'}`}>{status ? 'Online' : 'Offline'}</span>
);

const ListItem = ({
  picture,
  name: { first, last },
  online,
  acount_status: acountStatus
}) => (
  <div className="userlist__item main-card__wrap">
    <div className="userlist__info">
      <div className="userlist__img">
        <img src={picture} alt={first} />
      </div>
      <div className="userlist__column">
        <h4>{`${first} ${last}`}</h4>
        <OnlineStatus status={online} />
      </div>
    </div>
    <div className="userlist__column userlist__column--margin">
      <span><b>{acountStatus ? 'Active' : 'Block'}</b></span>
    </div>
    <div className="userlist__actions">
      <a href="/#" className="main-btn">View</a>
      <a href="/#" className="main-btn">{acountStatus ? 'Block' : 'Unblock'}</a>
      <a href="/#" className="main-btn">Delete</a>
    </div>
  </div>
);

OnlineStatus.propTypes = {
  status: PropTypes.bool
};

OnlineStatus.defaultProps = {
  status: false
};

ListItem.propTypes = {
  picture: PropTypes.string.isRequired,
  name: PropTypes.shape({
    first: PropTypes.string.isRequired,
    last: PropTypes.string.isRequired
  }).isRequired,
  online: PropTypes.bool.isRequired,
  acount_status: PropTypes.bool.isRequired
};

export default ListItem;
