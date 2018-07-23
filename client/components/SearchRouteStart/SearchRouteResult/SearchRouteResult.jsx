import React from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ActiveRouteCard from './ActiveRouteCard';
import RoutesFilters from './RoutesFilters';

const Spinner = () => (
  <div className="absolute-spinner-wrap">
    <div className="absolute-spinner">
      <div className="preloader-wrapper big active">
        <div className="spinner-layer spinner-mainBlue">
          <div className="circle-clipper left">
            <div className="circle" />
          </div>
          <div className="gap-patch">
            <div className="circle" />
          </div>
          <div className="circle-clipper right">
            <div className="circle" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

const SearchRouteResult = ({ isActive, routesData, updateFilterValues }) => (
  <div className="search-route-result">
    {routesData && <RoutesFilters updateFilterValues={updateFilterValues} />}
    <ReactCSSTransitionGroup transitionName="slideInOut" transitionEnterTimeout={400} transitionLeaveTimeout={350}>
      {routesData
        ? routesData.map((routeData, i) => <ActiveRouteCard key={i} routeData={routeData} />)
        : isActive && <p>No Routes Found</p>}
    </ReactCSSTransitionGroup>
    <ReactCSSTransitionGroup transitionName="fadeInOut" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
      {!isActive && <Spinner />}
    </ReactCSSTransitionGroup>
  </div>
);

SearchRouteResult.defaultProps = {
  routesData: null
};

SearchRouteResult.propTypes = {
  isActive: PropTypes.bool.isRequired,
  routesData: PropTypes.arrayOf(PropTypes.object),
  updateFilterValues: PropTypes.func.isRequired
};

export default SearchRouteResult;
