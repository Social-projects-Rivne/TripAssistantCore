import React from 'react';

const SearchRouteStart = () => (
  <div className="search-route-start">
    <p className="srs-h">Where do you want to start your trip?</p>
    <div className="sr-form-wrap">
      <form className="car-card__form-wrap ">
        <div className="input-field search-start__col">
          <input className="car-card__input" type="text" name="startPoint" placeholder="Please enter start point here" required />
          <label className="car-card__label active">Start point</label>
        </div>
        <div className="input-field search-start__col">
          <input className="car-card__input" type="text" name="endPoint" placeholder="Please enter start point here" required />
          <label className="car-card__label active">End point</label>
        </div>
        <button type="submit" href="#!" className="search-start__btn-submit">START SEARCH</button>
      </form>
    </div>
  </div>
);

export default SearchRouteStart;
