import React, { Component } from 'react';
import './SideBar.scss';


class SideBar extends Component {
  constructor() {
    super();
    state = {
      style: [
        { display: 'none' }
      ]
    };
    let showPanelHandler = () => {

    };
    this.showPanelHandler = this.showPanelHandler.bind(this);
  }

  render() {
    return (
      <div className="sideBar">
        <div id="panel" onClic={this.showPanelHandler}> {'<'}
          <div id="hidden_panel"> Щось </div>
        </div>
      </div>
    );
  }
}

export default SideBar;
