import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './HistoryWrap.scss';
import HistoryCard from './HistoryCard';

class HistoryWrap extends Component {
  render() {
    const { allHistory } = this.props;

    return (
      <div className="all-history__wrap">
        <p className="all-history__heading">
          History
        </p>
        <div className="feedbacks__body">
          {allHistory.map(({ name, date, active, color }, i) => (
            <HistoryCard
              key={i}
              routeName={name}
              routeColor={color}
              routeDate={date}
              isActive={active}
            />))}
        </div>
      </div>
    );
  }
}

HistoryWrap.propTypes = {
  allHistory: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default HistoryWrap;
