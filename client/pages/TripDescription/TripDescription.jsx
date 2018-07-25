import React, { Component } from 'react';
import './TripDescription.scss';
import TripDescriptionDetails from './components/TripDescriptionDetails/TripDescriptionDetails';
import TripSearch from './components/TripSearch/TripSearch';
import TripShortList from './components/TripShortList/TripShortList';

class TripDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: ''
    };
    this.filterUpdate = this.filterUpdate.bind(this);
  }

  filterUpdate(value) {
    this.setState({
      filterText: value
    });
  }

  render() {
    const { filterText } = this.state;
    return (
      <div>
        <TripSearch
          filterText={filterText}
          filterUpdate={this.filterUpdate}
        />
        <main>
          <TripShortList />
          <TripDescriptionDetails />
        </main>
      </div>
    );
  }
}
export default TripDescription;
