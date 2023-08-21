/* eslint-disable prettier/prettier */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';

import './Header.scss';
import { NavLink } from 'react-router-dom';

const Header = ({title}) => {
  return (
    <header className="header">
      <div className="header-logo">
        <img src="../../src/assets/logo_otrip.png" alt="logo-otrip" />
      </div>

      <div className="header-title">
        <h1>{title}</h1>
      </div>

      <div className="header-menu">
        <ul className="menu-items">
          <li className="menu-item">
            <NavLink className="menu-link" to="#">Accueil</NavLink>
          </li>
          <li className="menu-item">
            <NavLink className="menu-link" to="#">Créer un compte</NavLink>
          </li>
          <li className="menu-item">
            <NavLink className="menu-link-login" to="#">Se connecter</NavLink>
          </li>
        </ul>
      </div>

      <div className="header--burger-menu">
        <FontAwesomeIcon icon={faBars} />
      </div>
    </header>
  )
};

export default Header;
