import React, { Component } from 'react';
import { Datepicker } from 'materialize-css';
import PropTypes from 'prop-types';

class RoutersFilters extends Component {
  constructor() {
    super();
    this.datepicker = React.createRef();
    this.filterValues = {
      date: undefined,
      passengers: undefined,
      minPrice: undefined,
      maxPrice: undefined
    };
  }

  componentDidMount() {
    Datepicker.init(this.datepicker.current, {
      format: 'mm/dd/yyyy', onSelect: this.handleDataPickerSelect, autoClose: true
    });
    this.timer = null;
  }

  handleFilterChange = (e) => {
    clearTimeout(this.timer);
    const { updateFilterValues } = this.props;
    this.filterValues[e.target.name] = e.target.value;
    this.timer = setTimeout(() => updateFilterValues(this.filterValues), 500);
  }

  handleDataPickerSelect = (date) => {
    const { updateFilterValues } = this.props;
    const newDate = date ? new Intl.DateTimeFormat('en-US').format(date) : undefined;
    this.filterValues.date = newDate;
    updateFilterValues(this.filterValues);
  }

  render() {
    return (
      <div className="filter-card">
        <p className="filter-card-p">Filters</p>
        <div className="input-field filter-card-input-wrap">
          <input type="text" ref={this.datepicker} placeholder="Pick the date" name="date" onChange={() => this.handleDataPickerSelect(undefined)} />
          <label className="filter-card-label active">Date of start</label>
        </div>
        <div className="input-field filter-card-input-wrap">
          <input className="filter-card-input" type="text" placeholder="Number of passengers" name="passengers" onChange={this.handleFilterChange} />
          <label className="filter-card-label active">Number of passengers</label>
        </div>
        <div className="input-field filter-card-input-wrap">
          <input className="filter-card-input" type="text" placeholder="Min price" name="minPrice" onChange={this.handleFilterChange} />
          <label className="filter-card-label active">Min price</label>
        </div>
        <div className="input-field filter-card-input-wrap">
          <input className="filter-card-input" type="text" placeholder="Max price" name="maxPrice" onChange={this.handleFilterChange} />
          <label className="filter-card-label active">Max price</label>
        </div>
      </div>
    );
  }
}

RoutersFilters.propTypes = {
  updateFilterValues: PropTypes.func.isRequired
};

export default RoutersFilters;
