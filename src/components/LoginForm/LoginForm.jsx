/* eslint-disable @typescript-eslint/no-redeclare */
/* eslint-disable prettier/prettier */
import { useDispatch, useSelector } from 'react-redux';

import { Link, NavLink } from 'react-router-dom';
import './LoginForm.scss';

import { changeLoginField, submitLogin } from '../../actions/user';

const LoginForm = () => {
  const emailValue = useSelector((state) => state.user.email);
  const passwordValue = useSelector((state) => state.user.password);

  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const { newValue, name } = event.target;
    const action = changeLoginField(newValue, name);
    dispatch(action);
  };

  const handleSubmit = (event) => {
    // empeche le rechargement par défaut
    event.preventDefault();
    // appelle l'action pour soumettre la connexion
    dispatch(submitLogin());
  }

  return (
    <div className="login-form">

      <div className="left-side-img">
        <img src="../../src/assets/dino-reichmuth-A5rCN8626Ck-unsplash.jpg" alt="login img" />
      </div>

      <div className="right-side-form">
        <div className="login-title">
          <h1>Se connecter</h1>
        </div>

        <form
          className="login-form-container"
          onSubmit={handleSubmit}
        >
          <label className="email-label" htmlFor="email">Adresse e-mail</label>
          <input
            type="email"
            name="email"
            value={emailValue}
            onChange={handleInputChange}
            required
          />

          <label className="password-label" htmlFor="password">Mot de passe</label>
          <input
            type="password"
            name="password"
            value={passwordValue}
            onChange={handleInputChange} 
            required
          />

          <NavLink className="forgeted-password" to="/">Mot de passe oublié &#62;</NavLink>

          <div className="login-form-btn">
            <button
              type="submit"
              className="btn-connexion"
            >
              Se connecter
            </button>
            <Link to="/creer-un-compte">
              <button type="submit" className="btn-createAccount">Créer un compte</button>
            </Link>
          </div>
          
        </form>
      </div>

    </div>
  );
};

export default LoginForm;