import React from 'react';

import './SearchRoute.scss';
import SearchRouteStart from '../../components/SearchRouteStart';

const SearchRoute = () => (
  <div className="search-route">
    <h1 className="search-route__header">Search</h1>
    <div className="sr-wrap">
      <div className="sr-inner">
        <SearchRouteStart />
      </div>
    </div>
  </div>
);

export default SearchRoute;
