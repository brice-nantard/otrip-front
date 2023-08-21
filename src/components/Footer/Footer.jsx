/* eslint-disable prettier/prettier */
import { NavLink } from 'react-router-dom';

import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-menu">
        <NavLink className="footer-menu-item" to="/contact">Contact</NavLink>
        <img className="footer-social-item" src="../../src/assets/facebook.svg" alt="facebook" />
        <img className="footer-social-item" src="../../src/assets/instagram.svg" alt="instagram" />
        <img className="footer-social-item" src="../../src/assets/x-twitter.svg" alt="x-twitter" />        
      </div>
    </footer>
  )
};

export default Footer;