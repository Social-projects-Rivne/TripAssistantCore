import React from 'react';
import { Link } from 'react-router-dom';
import './Logo.scss';

const Logo = () => (
  <Link className="logo" to="/">
    TRIP ASSISTANT
  </Link>
);


export default Logo;
