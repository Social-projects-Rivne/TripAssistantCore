import React from 'react';
import Loader from 'react-loader-spinner';
import './PreLoader.scss';

const PreLoader = () => (
  <div className="pre-loader">
    <Loader
      type="Ball-Triangle"
      color="#252d3a"
      height="100"
      width="100"
    />
  </div>
);

export default PreLoader;
