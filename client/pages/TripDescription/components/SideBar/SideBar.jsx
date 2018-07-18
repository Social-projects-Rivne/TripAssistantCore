import React, { Component } from 'react';
import './SideBar.scss';


class SideBar extends Component {
  constructor() {
    super();
    const style = {
      display: 'none'
    };
  }

  render() {
    return (
      <div className="sideBar">
        <div id="panel" style={this.style.display}> {'<'}
          <div id="hidden_panel">Щось</div>
        </div>
      </div>
    );
  }
}

export default SideBar;
