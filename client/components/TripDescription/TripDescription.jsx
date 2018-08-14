import React from 'react';
import axios from 'axios';


class TripDescription extends React.Component {
  constructor() {
    super();

    this.state = {
      allHistory: []
    };
  }

  componentDidMount() {
    axios.get('public/data/allHistory.json')
      .then(({ data }) => this.setState({ allHistory: data }));
  }

  render() {
    const { allHistory } = this.state;
    return (
      <div>
        {allHistory.map(({ name, date, isActive, id }, i) => (
          <div key={i}>
            <p>{id}</p>
            <p>{name}</p>
            <p>{date}</p>
            <p>{isActive}</p>
          </div>

        ))}
      </div>
    );
  }
}

export default TripDescription;
