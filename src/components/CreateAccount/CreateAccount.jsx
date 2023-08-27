/* eslint-disable prettier/prettier */
import { NavLink } from 'react-router-dom';

import './CreateAccount.scss';

const CreateAccount = () => {
  return (
    <div className="create-account">

      <div className="left-side-img">
        <img src="../../src/assets/dino-reichmuth-A5rCN8626Ck-unsplash.jpg" alt="login img" />
      </div>

      <div className="right-side-form">
        <div className="create-acount--title">
          <div className="title">
            <h1>Je crée mon compte</h1>
            <NavLink to="/se-connecter" className="login-link">J'ai déjà un compte &#62;</NavLink>
          </div>
        </div>

        <form
          className="login-form-container"
          method="POST"
          action=""
        >
          <label className="label" htmlFor="text">Choisissez votre pseudo</label>
          <input type="text" name="pseudo" />
          <label className="label" htmlFor="email">Votre e-mail</label>
          <input type="email" name="email" />
          <label className="label" htmlFor="password">Choisissez votre mot de passe</label>
          <input type="password" name="password" />
          <label className="label" htmlFor="password">Confirmez votre mot de passe</label>
          <input type="password" name="password" />

          <div className="login-form-btn">
            <button type="submit" className="btn-valider">Valider</button>
          </div>
          
        </form>
      </div>

    </div>
  );
};

export default CreateAccount;