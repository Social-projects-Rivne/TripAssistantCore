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
          {allHistory.map(({ name, date, isActive, id }, i) => (
            <HistoryCard key={i} routeName={name} routeDate={date} isActive={isActive} id={id} />
          ))}
        </div>
      </div>
    );
  }
}

HistoryWrap.propTypes = {
  allHistory: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default HistoryWrap;
