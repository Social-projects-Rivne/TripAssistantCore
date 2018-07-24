import React from 'react';
import './Info.scss';


const Info = () => (
  <div className="main-info">
    <div className="Map">
      <p>Here will be map</p>
    </div>
    <div className="contacts">
      <h1>Contacts</h1>
      <p>Our phone 66-666-666</p>
      <p>Our email ad@666.gmail.com</p>
    </div>
    <div className="form">
      <form>
        <input type="text" name="name" placeholder="input your name\login" required /> <br />
        <input type="email" name="email" placeholder="input your email" required /> <br />
        <textarea placeholder="your message here">
          
        <a href="# " className="waves-effect waves-light btn-large"><i className="material-icons left">Submit</i></a>
      </form>
    </div>
    <footer>
      <div className="copyright">Copyright</div>
      <div className="footer-menu">
        <ul>
          <li><a href="# ">icon</a></li>
          <li><a href="# ">icon</a></li>
          <li><a href="# ">icon</a></li>
          <li><a href="# ">icon</a></li>
        </ul>
      </div>
    </footer>
  </div>
);

export default Info;
