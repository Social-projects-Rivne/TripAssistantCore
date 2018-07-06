import React from 'react';
import { Link } from 'react-router-dom';
import LogoImg from 'images/logo.svg';
import './Logo.scss';

const Logo = () => (
  <Link className="logo" to="/">
    <img src={LogoImg} alt="Logo" />
  </Link>
);


export default Logo;
