/* eslint-disable prettier/prettier */
import { useDispatch, useSelector } from 'react-redux';

import { NavLink } from 'react-router-dom';

import './CreateAccount.scss';

import { changeCreateAccountField, submitCreateAccount } from '../../actions/user';

const CreateAccount = () => {
  const pseudo = useSelector((state) => state.user.alias);
  const email = useSelector((state) => state.user.email);
  const password = useSelector((state) => state.user.password);

  const dispatch = useDispatch();

  // changement des champs du formulaire
  const handleChangeInput = (event) => {
    const { name, value} = event.target;
    dispatch(changeCreateAccountField(name, value));
  };
  
  // envoi du formulaire
  const handleSubmitCreateAccount = (event) => {
    event.preventDefault();

    dispatch(submitCreateAccount());

  };

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
          onSubmit={handleSubmitCreateAccount}
        >
          <label className="label" htmlFor="alias">Choisissez votre pseudo</label>
          <input
            type="text"
            name="alias"
            onChange={handleChangeInput}
            value={pseudo}
          />
          <label className="label" htmlFor="email">Votre e-mail</label>
          <input
            type="email"
            name="email"
            onChange={handleChangeInput}
            value={email}
          />
          <label className="label" htmlFor="password">Choisissez votre mot de passe</label>
          <input
            type="password"
            name="password"
            onChange={handleChangeInput}
            value={password}
          />
          <label className="label" htmlFor="password">Confirmez votre mot de passe</label>
          <input
            type="password"
            name="password"
            onChange={handleChangeInput}
            value={password}
          />

          <div className="login-form-btn">
            <button type="submit" className="btn-valider">Valider</button>
          </div>
          
        </form>
      </div>

    </div>
  );
};

export default CreateAccount;