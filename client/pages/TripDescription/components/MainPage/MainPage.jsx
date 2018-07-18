import React, { Component } from 'react';
import './MainPage.scss';

class MainPage extends Component {
  render() {
    return (
      <div>
        <div className="table">
          <table>
            <tr>
              <th>Trip date</th>
              <th>From</th>
              <th>To</th>
              <th>Cost ₴</th>
              <th>Driver</th>
            </tr>
            <tr>
              <td>14.08.2010</td>
              <td>Chernobul</td>
              <td>Narnia</td>
              <td>1488</td>
              <td>Stalker</td>
            </tr>
            <tr>
              <td>14.08.2010</td>
              <td>Chernobul</td>
              <td>Narnia</td>
              <td>1488</td>
              <td>Stalker</td>
            </tr>
            <tr>
              <td>14.08.2010</td>
              <td>Chernobul</td>
              <td>Narnia</td>
              <td>1488</td>
              <td>Stalker</td>
            </tr>
            <tr>
              <td>14.08.2010</td>
              <td>Chernobul</td>
              <td>Narnia</td>
              <td>1488</td>
              <td>Stalker</td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}

export default MainPage;
