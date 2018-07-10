import React from 'react';
import './Info.scss';

class Info extends React.Component {
  render() {
    return (
      <div className="main-info">
        <h1>Contacts</h1>
        <p>Our phone 66-666-666</p>
        <p>Our email ad@666.gmail.com</p>
        <form>
          <input type="text" /> <br />
          <input type="phone" /> <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Info;
