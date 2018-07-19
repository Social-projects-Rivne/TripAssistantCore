import React, { Component } from 'react';
import { toast } from 'materialize-css';
import axios from 'axios';

import './SearchRoute.scss';
import SearchRouteStart from '../../components/SearchRouteStart';
import SearchRouteResult from '../../components/SearchRouteStart/SearchRouteResult';

class SearchRoute extends Component {
  constructor() {
    super();
    this.state = {
      searchingStageTwo: false,
      searchResultIsReady: false,
      searchedRouteData: null
    };
    this.searchPoints = { startPoint: null, endPoint: null };
  }

  setStartPoint = ({ location = null } = {}) => {
    this.searchPoints.startPoint = location;
  }

  setEndPoint = ({ location = null } = {}) => {
    this.searchPoints.endPoint = location;
  }

  handleSearchSubmit = (e) => {
    e.preventDefault();
    const { startPoint, endPoint } = this.searchPoints;
    return (!startPoint && !endPoint)
      ? toast({ html: 'Please choose at least one place' })
      : this.handleRouteSearch();
  }

  handleRouteSearch = () => {
    this.setState({ searchingStageTwo: true, searchResultIsReady: false });
    console.log(this.searchPoints);
    setTimeout(() => this.fetchRoutesData(), 1000);
  }

  fetchRoutesData = () => {
    axios.get('public/data/searchResultOfPublishedRoutes.json')
      .then(({ data }) => this.setState({ searchedRouteData: data, searchResultIsReady: true }));
  }

  render() {
    const { searchingStageTwo, searchResultIsReady, searchedRouteData } = this.state;

    return (
      <div className="search-route">
        <h1 className="search-route__header">Search</h1>
        <div className="sr-wrap">
          <div className="sr-inner">
            <SearchRouteStart
              setStartPoint={this.setStartPoint}
              setEndPoint={this.setEndPoint}
              handleSearchSubmit={this.handleSearchSubmit}
            />
            {searchingStageTwo && (
              <SearchRouteResult
                routesData={searchedRouteData}
                isActive={searchResultIsReady}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default SearchRoute;
