import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TripSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.clearInput = this.clearInput.bind(this);
    this.filterUpdate = this.filterUpdate.bind(this);
  }

  clearInput() {
    this.setState = ({
      search: ''
    });
  }

  filterUpdate() {
    const { filterUpdate: propsFilterUpdate } = this.props;
    const val = this.myValue.calue;
    propsFilterUpdate(val);
  }

  render() {
    const { search } = this.state;
    const filterText = this.props;
    console.log('child component', filterText);
    return (
      <div>
        <div className="search">
          <form>
            <input
              value={search}
              ref={(value) => { this.myValue = value; }}
              className="filter"
              type="text"
              placeholder="type for filter"
              onChange={this.filterUpdate}
            />
          </form>
          <a href="# " className="waves-effect waves-light btn clear" onClick={this.clearInput}>CLEAR</a>
        </div>
      </div>
    );
  }
}

TripSearch.propTypes = {
  filterUpdate: PropTypes.string.isRequired
};

export default TripSearch;
