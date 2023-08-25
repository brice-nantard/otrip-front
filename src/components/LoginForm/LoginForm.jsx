/* eslint-disable prettier/prettier */
import { NavLink } from 'react-router-dom';
import './LoginForm.scss';

const LoginForm = () => {
  return (
    <div className="login-form">

      <div className="left-side-img">
        <img src="../../src/assets/dino-reichmuth-A5rCN8626Ck-unsplash.jpg" alt="login img" />
      </div>

      <div className="right-side-form">
        <div className="login-title">
          <h1>Se connecter</h1>
          <img src="../../src/assets/logo-mobile.png" alt="login icon" />
        </div>

        <form
          className="login-form-container"
          method="POST"
          action="/login"
        >
          <label className="email-label" htmlFor="email">Adresse e-mail</label>
          <input type="email" name="email" required />

          <label className="password-label" htmlFor="email">Mot de passe</label>
          <input type="password" name="password" required />

          <NavLink className="forgeted-password" to="/">Mot de passe oublié &#62;</NavLink>

          <div className="login-form-btn">
            <button type="submit" className="btn-connexion">Se connecter</button>
            <button type="submit" className="btn-createAccount">Créer un compte</button>
          </div>
          
        </form>
      </div>

    </div>
  );
};

export default LoginForm;