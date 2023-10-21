/* eslint-disable prettier/prettier */
import { NavLink } from 'react-router-dom';

import './Footer.scss';
import facebook from '../../assets/facebook.svg';
import instagram from '../../assets/instagram.svg';
import twitter from '../../assets/x-twitter.svg';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-menu">
        <NavLink className="footer-menu-item" to="/contact">Contact</NavLink>
        <div className="footer-social-items">
          <img className="footer-social-item" src={facebook} alt="facebook" />
          <img className="footer-social-item" src={instagram} alt="instagram"/>
          <img className="footer-social-item" src={twitter}alt="x-twitter" /> 
        </div>
               
      </div>
    </footer>
  )
};

export default Footer;