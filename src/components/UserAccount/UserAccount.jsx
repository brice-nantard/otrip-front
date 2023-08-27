/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable prettier/prettier */
import './UserAccount.scss';

const UserAccount = () => {
  return (
    <div className="user-account">
      <h1>Mon compte</h1>
      <div className="user-account--items">
        <label>Votre pseudo</label>
        <input type="text" value="" />
      </div>
      <div className="user-account--items">
        <label>Votre e-mail</label>
        <input type="email" value="" />
      </div>
      <div className="user-account--items">
        <label>Votre mot de passe</label>
        <input type="password" value="" />
      </div>
      <button type="button" onClick="">Modifier</button>
    </div>
  );
};

export default UserAccount;