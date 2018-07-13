import React from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import './ProfileModal.scss';

/* eslint-disable */
const ProfileModal = ({ toClose, isOpen, children }) => (
  <ReactCSSTransitionGroup transitionName="slideInOut" transitionEnterTimeout={400} transitionLeaveTimeout={350}>
    {isOpen && <div id="profile-modal" onClick={toClose}>{children}</div>}
  </ReactCSSTransitionGroup>
);
/* eslint-enable */

ProfileModal.propTypes = {
  toClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
};

export default ProfileModal;
