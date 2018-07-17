import React, { Component } from 'react';
import './SideBar.scss';

class SideBar extends Component {
  render() {
    return (
      <div className="sideBar">
        <div id="panel"> {'<'}
          <div id="hidden_panel">Щось</div>
        </div>
      </div>
    );
  }
}

export default SideBar;
