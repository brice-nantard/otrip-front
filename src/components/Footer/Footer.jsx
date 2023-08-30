/* eslint-disable prettier/prettier */
import { NavLink } from 'react-router-dom';

import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-menu">
        <NavLink className="footer-menu-item" to="/contact">Contact</NavLink>
        <div className="footer-social-items">
          <img className="footer-social-item" src="../../src/assets/facebook.svg" alt="facebook" />
          <img className="footer-social-item" src="../../src/assets/instagram.svg" alt="instagram" href="https://www.instagram.com/otrip.planner"/>
          <img className="footer-social-item" src="../../src/assets/x-twitter.svg" alt="x-twitter" /> 
        </div>
               
      </div>
    </footer>
  )
};

export default Footer;