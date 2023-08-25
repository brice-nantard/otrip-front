/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';

import './Header.scss';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);

  return (
    <header className="header">
      <div className="header-logo">
        <img className="logo-desktop" src="../../src/assets/logo_otrip.png" alt="logo-otrip" />
        <img className="logo-mobile" src="../../src/assets/logo-mobile.png" alt="logo-otrip" />
      </div>

      <div className="header-title">
        <h1>PLANIFICATEUR DE VOYAGES</h1>
      </div>

      <div
        className={isMenuExpanded ? "header-menu expanded" : "header-menu"}>
        <ul className="menu-items">
          <li className="menu-item">
            <NavLink className="menu-link" to="/">Accueil</NavLink>
          </li>
          <li className="menu-item">
            <NavLink className="menu-link" to="/creer-un-compte">Créer un compte</NavLink>
          </li>
          <li className="menu-item">
            <NavLink className="menu-link-login" to="/se-connecter">Se connecter</NavLink>
          </li>
        </ul>
      </div>

      <button 
        className="header--burger-menu"
        type="button"
        onClick={() => {setIsMenuExpanded(!isMenuExpanded)}}>
        <FontAwesomeIcon icon={faBars} />
      </button>
    </header>
  )
};

export default Header;
