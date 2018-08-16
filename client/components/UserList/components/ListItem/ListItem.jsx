import React from 'react';
import PropTypes from 'prop-types';
import DefaultUserpic from 'images/default-userpic.png';


const ListItem = ({
  iduser,
  avatar,
  role,
  name: { first, last },
  acount_status: acountStatus,
  setUserStatus,
  deleteUser
}) => (
  <div className={`userlist__item main-card__wrap ${acountStatus ? '' : 'red lighten-4'} ${role === 'admin' ? 'hide' : ''}`}>
    <div className="userlist__info">
      <div className="userlist__img">
        <img src={avatar ? `images/${avatar}` : DefaultUserpic} alt={first} />
      </div>
      <div className="userlist__column">
        <h5>{`${first} ${last}`}</h5>
      </div>
    </div>
    <div className="userlist__actions">
      {/* <a href="/#" className="main-btn">View</a> */}
      <a href="#!" className="main-btn" onClick={() => setUserStatus(iduser, !acountStatus)}>{acountStatus ? 'Block' : 'Unblock'}</a>
      <a href="#!" className="main-btn" onClick={() => deleteUser(iduser)}>Delete</a>
    </div>
  </div>
);

ListItem.propTypes = {
  role: PropTypes.string.isRequired,
  iduser: PropTypes.number.isRequired,
  setUserStatus: PropTypes.func.isRequired,
  deleteUser: PropTypes.func.isRequired,
  avatar: PropTypes.string,
  name: PropTypes.shape({
    first: PropTypes.string.isRequired,
    last: PropTypes.string.isRequired
  }).isRequired,
  acount_status: PropTypes.bool.isRequired
};

ListItem.defaultProps = {
  avatar: null
};

export default ListItem;
