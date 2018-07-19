import React, { Component } from 'react';
import './SideBar.scss';


class SideBar extends Component {
  constructor() {
    super();
    this.state = {
      isPanelOpen: false
    };
    this.tooggelPanel = this.tooggelPanel.bind(this);
  }

  tooggelPanel() {
    this.setState(prevState => ({ isPanelOpen: !prevState.isPanelOpen }));
  }

  render() {
    const { isPanelOpen } = this.state;
    return (
      <div className="sideBar">
        <div id="panel" onClick={this.tooggelPanel} role="presentation"> {'<'}
          <div className={`hidden_panel ${isPanelOpen ? 'hidden_panel--active' : ''}`}> Щось </div>
        </div>
      </div>
    );
  }
}

export default SideBar;
