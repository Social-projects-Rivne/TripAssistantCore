import React from 'react';
import './Sidebar.scss';

import TripInfo from './components/TripInfo';
import TripPoint from './components/TripPoint';

const POINT = [
  { point: 'A' },
  { point: 'B' }
];

const Sidebar = () => (
  <div className="sidebar">
    <TripInfo />
    { POINT.map(({ point }, i) => <TripPoint point={point} key={i} />) }
  </div>
);

export default Sidebar;
