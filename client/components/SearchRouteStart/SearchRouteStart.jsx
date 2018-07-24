import React from 'react';
import PropTypes from 'prop-types';
import Geosuggest from 'react-geosuggest';

const SearchRouteStart = ({ setStartPoint, setEndPoint, handleSearchSubmit, isGooleApiLoded }) => (
  <div className="search-route-start">
    <p className="srs-h">Where do you want to go?</p>
    <div className="sr-form-wrap">
      <form className="car-card__form-wrap" onSubmit={handleSearchSubmit} autoComplete="off">
        <div className="input-field search-start__col">
          {isGooleApiLoded && <Geosuggest name="startPoint" onSuggestSelect={setStartPoint} inputClassName="car-card__input" autoComplete="off" />}
          <label className="car-card__label active">Start point</label>
        </div>
        <div className="input-field search-start__col">
          {isGooleApiLoded && <Geosuggest name="endPoint" onSuggestSelect={setEndPoint} inputClassName="car-card__input" autoComplete="off" />}
          <label className="car-card__label active">End point</label>
        </div>
        <button type="submit" href="#!" className="search-start__btn-submit">SEARCH</button>
      </form>
    </div>
  </div>
);

SearchRouteStart.propTypes = {
  setStartPoint: PropTypes.func.isRequired,
  setEndPoint: PropTypes.func.isRequired,
  handleSearchSubmit: PropTypes.func.isRequired,
  isGooleApiLoded: PropTypes.bool.isRequired
};

export default SearchRouteStart;
