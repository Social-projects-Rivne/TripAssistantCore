import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './HistoryWrap.scss';

class HistoryWrap extends Component {
  render() {
    const { allHistory } = this.props;

    return (
      <div className="all-history__wrap">
        <p className="all-history__heading">
          History
        </p>
        <div className="feedbacks__body">
          {allHistory.map((historySingle, i) => <p key={i}>{historySingle.name}</p>)}
        </div>
      </div>
    );
  }
}

HistoryWrap.propTypes = {
  allHistory: PropTypes.array.isRequired // eslint-disable-line react/forbid-prop-types
};

export default HistoryWrap;
