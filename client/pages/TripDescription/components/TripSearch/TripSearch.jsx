import React, { Component } from 'react';

class TripSearch extends Component {
  constructor() {
    super();
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
    const val = this.myValue.value;
    console.log(val);
  }

  render() {
    const { search } = this.state;
    const filterText = this.props;
    console.log(filterText);
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


export default TripSearch;
