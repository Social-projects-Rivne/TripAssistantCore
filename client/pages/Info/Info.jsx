import React from 'react';
import slack from 'images/slack.svg';
import facebook from 'images/facebook.svg';
import github from 'images/github-logo.svg';
import { InfoMap } from '../../components/InfoMap/InfoMap';
import './Info.scss';


const Info = () => (
  <div className="main-info">
    <div className="team">
      <h1>Hi we are team RV-034.WebUI\Node.js</h1>
      <p>We are hope that you have enjoyed to use our Trip-assistant</p>
    </div>
    <div className="contacts">
      <h1>Contact us!</h1>
      <p>Our phone 66-666-666</p>
      <p>Our email email@666.gmail.com</p>
    </div>
    <div className="form">
      <form>
        <input type="text" name="name" placeholder="your name\login" required /> <br />
        <input type="email" name="email" placeholder="your email" required /> <br />
        <textarea placeholder="your message here" required />
        <button type="submit" className="waves-effect waves-light btn-large"><i className="material-icons left">Submit</i></button>
      </form>
    </div>
    <div className="map">
      {
        <InfoMap />
      }
    </div>
    <footer>
      <div className="copyright">Copyright &#169; by RV-034Web/UI</div>
      <div className="footer-menu">
        <ul>
          <li><a href="https://rv-034webui.slack.com/ " rel="noopener noreferrer" target="_blank"><img src={slack} alt="slack" /></a></li>
          <li><a href="https://uk-ua.facebook.com/SoftServeInc/ " rel="noopener noreferrer" target="_blank"><img src={facebook} alt="slack" /></a></li>
          <li><a href="https://github.com/orgs/Social-projects-Rivne/teams/rv-034-webui/repositories " rel="noopener noreferrer" target="_blank"><img src={github} alt="slack" /></a></li>
        </ul>
      </div>
    </footer>
  </div>
);

export default Info;
