import React, { Component } from 'react';
import { toast } from 'materialize-css';
import axios from 'axios';

import './SearchRoute.scss';
import SearchRouteStart from '../../components/SearchRouteStart';
import SearchRouteResult from '../../components/SearchRouteStart/SearchRouteResult';

const MissingData = () => {
  const names = ['Oleksii Iordatii', 'Serhii Kovach', 'Olena Kovach', 'Vasilii Melnyk', 'Claus Green', 'Kith Brown', 'Katie Luw', 'Marry Smith', 'Jake Black', 'Sam Harris', 'Seth Green'];
  return {
    name: names[Math.floor(Math.random() * names.length)],
    rating: Number.parseFloat((Math.random() * 2).toFixed(1)) + 3,
    date: `${Math.ceil(Math.random() * 12)}/${Math.ceil(Math.random() * 28)}/2018`,
    seats: Math.ceil(Math.random() * 5),
    price: Math.ceil(Math.random() * 10) * 50,
    currency: 'UAH'
  };
};

class SearchRoute extends Component {
  constructor() {
    super();
    this.state = {
      isGooleApiLoded: false,
      searchingStageTwo: false,
      searchResultIsReady: false,
      searchedRouteData: null,
      filterValues: {
        date: undefined,
        passengers: undefined,
        minPrice: undefined,
        maxPrice: undefined
      }
    };
    this.dataToFilter = null;
    this.searchPoints = { startPoint: null, endPoint: null };
  }

  componentDidMount() {
    if (window.google) this.setState({ isGooleApiLoded: true });
  }

  setStartPoint = ({ location = null } = {}) => {
    this.searchPoints.startPoint = location;
  }

  setEndPoint = ({ location = null } = {}) => {
    this.searchPoints.endPoint = location;
  }

  updateFilterValues = ({
    date = undefined, passengers = undefined, minPrice = undefined, maxPrice = undefined
  }) => {
    console.log(date, passengers, minPrice, maxPrice);
    this.setState({
      filterValues: {
        date, passengers, minPrice, maxPrice
      }
    });
    setTimeout(() => this.filterData(), 0);
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
    setTimeout(() => this.fetchLocalStorageData(), 1000);
  }

  isNear = (filterVal, dbVal) => (
    Math.abs(Number.parseFloat(filterVal) - Number.parseFloat(dbVal)).toFixed(1) <= 0.1
  )

  fetchLocalStorageData = () => {
    const { startPoint, endPoint } = this.searchPoints;
    axios.get('api/trips/all')
      .then(({ data }) => {
        const RoutesToReturn = data
          .filter((route) => {
            const {
              start: { lat: startLat, lng: startLng },
              end: { lat: endLat, lng: endLng }
            } = route.distance;

            const shouldReturnStart = startPoint
              ? (this.isNear(startPoint.lat, startLat) && this.isNear(startPoint.lng, startLng))
              : true;

            const shouldReturnEnd = endPoint
              ? (this.isNear(endPoint.lat, endLat) && this.isNear(endPoint.lng, endLng))
              : true;

            return (shouldReturnStart && shouldReturnEnd);
          })
          .map(({ start_address: startAddress, end_address: endAddress }) => {
            const missingData = MissingData();
            missingData.startPoint = startAddress;
            missingData.endPoint = endAddress;
            return missingData;
          });
        this.dataToFilter = RoutesToReturn;
        this.filterData();
      })
      .catch((e) => {
        this.setState({ searchedRouteData: null, searchResultIsReady: true });
        toast({ html: 'Bad connection, please try again later!' });
        console.error(e);
      });
  }

  fetchRoutesData = () => {
    axios.get('public/data/searchResultOfPublishedRoutes.json')
      .then(({ data }) => {
        this.dataToFilter = data;
        this.filterData();
      });
  }

  filterData = () => {
    const {
      filterValues: {
        date, passengers, minPrice, maxPrice
      }
    } = this.state;
    let filteredData = this.dataToFilter;

    if (date) filteredData = filteredData.filter(obj => obj.date === date);
    if (passengers) filteredData = filteredData.filter(obj => obj.seats >= passengers);
    if (minPrice) filteredData = filteredData.filter(obj => obj.price >= minPrice);
    if (maxPrice) filteredData = filteredData.filter(obj => obj.price <= maxPrice);
    this.setState({ searchedRouteData: filteredData, searchResultIsReady: true });
  }

  render() {
    const {
      searchingStageTwo, searchResultIsReady, searchedRouteData, isGooleApiLoded
    } = this.state;

    return (
      <div className="search-route">
        <h1 className="search-route__header">Find Your Trip</h1>
        <div className="sr-wrap">
          <div className="sr-inner">
            <SearchRouteStart
              isGooleApiLoded={isGooleApiLoded}
              setStartPoint={this.setStartPoint}
              setEndPoint={this.setEndPoint}
              handleSearchSubmit={this.handleSearchSubmit}
            />
            {searchingStageTwo && (
              <SearchRouteResult
                routesData={searchedRouteData}
                isActive={searchResultIsReady}
                updateFilterValues={this.updateFilterValues}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}


<<<<<<< HEAD
export default scriptLoader(
  ['https://maps.googleapis.com/maps/api/js?key=AIzaSyBA3gUpJSVxQ3Hu51l3XB7C6fcpObXSQ80&libraries=places']
)(SearchRoute);
=======
export default SearchRoute;
>>>>>>> dev
