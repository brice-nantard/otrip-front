/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCircleUser, faPowerOff } from '@fortawesome/free-solid-svg-icons';

import './Header.scss';
import { NavLink, useNavigate } from 'react-router-dom';
import { handleLogout } from '../../actions/user';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isMenuExpanded, setIsMenuExpanded] = useState(false);

  const isLogged = useSelector((state) => state.user.logged);

  // gestion de la déconnexion utilisateur au click sur l'icone off
  const logout = async () => {
    // on supprime les infos dans le localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('id');
    // on dispatch l'action de déconnexion afin de réinitialiser le state
    await dispatch(handleLogout());
    // on redirige vers la page de login
    navigate('/');
  };

  return (
    <header className="header">
      <div className="header-logo">
        <img className="logo-desktop" src="../../src/assets/logo_otrip.png" alt="logo-otrip" />
        <img className="logo-mobile" src="../../src/assets/logo-mobile.png" alt="logo-otrip" />
      </div>

      <div className="header-title">
        <h1>Planificateur de voyages</h1>
      </div>

      <div className={isMenuExpanded ? "header-menu expanded" : "header-menu"}>
        <ul className="menu-items">
          <li className="menu-item">
            <NavLink className="menu-link" to="/">Accueil</NavLink>
          </li>
          {isLogged ? (
            <>
              <li className="menu-item">
                <NavLink className="menu-link" to="/mes-voyages">Mes voyages</NavLink>
              </li>
              <li className="menu-item">
                <NavLink className="menu-link" to="/mon-compte">
                  <FontAwesomeIcon icon={faCircleUser} />
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink className="menu-link" onClick={logout}>
                  <FontAwesomeIcon icon={faPowerOff} />
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li className="menu-item">
                <NavLink className="menu-link" to="/creer-un-compte">Créer un compte</NavLink>
              </li>
              <li className="menu-item">
                <NavLink className="menu-link-login" to="/se-connecter">Se connecter</NavLink>
              </li>
            </>
          )}
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
