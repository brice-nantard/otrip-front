/* eslint-disable prettier/prettier */
import { NavLink } from 'react-router-dom';

import './Error.scss';

const Error = () => {
  return (
    <div className="error">
      <h1>Erreur 404</h1>
      <h2>Nous sommes désolés, cette page n'existe pas.</h2>
      <NavLink className="error-link" to="/">&#60; Retour à la page d'accueil</NavLink>
    </div>
  )
};

export default Error;