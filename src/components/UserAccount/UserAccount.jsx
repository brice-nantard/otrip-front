/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/label-has-associated-control */
import axios from 'axios';
import { useEffect, useState } from 'react';
import './UserAccount.scss';

const UserAccount = () => {
  // recupération des données de l'utilisateur
  const [userData, setUserData] = useState({
    alias: '',
    email: '',
  });

  const [password, setPassword] = useState({
    password: '',
    newPassword: '',
  });
  const handleChangeCurrentPassword = (event) => {
    setPassword(prevState => (
      {
        ...prevState,
        password: event.target.value,
      }
    ));
  }

  // const [newPassword, setNewPassword] = useState("");
  const handleChangeNewPassword = (event) => {
    setPassword(prevState => (
      {
        ...prevState,
        newPassword: event.target.value,
      }
    ));
  }

  // modification des champs input
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value
    });
  };

  // route récupération des données de l'utilisateur
  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_OTRIP_BACK_URL}api/profile`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      )
      .then((response) => {
        // console.log(response.data);
        setUserData(response.data);
      })
      .catch((error) => {
        // console.log(error);
      });
  }, []);

  // Route modification du mot de passe
  const handleUpdatePassword = () => {
    axios
      .put(
        `${import.meta.env.VITE_OTRIP_BACK_URL}api/resetpassword`,
        {
          password: password.password,
          new_password: password.newPassword
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      )
      .then((response) => {
        // console.log(response.data);
        if (response.data.success) {
          setPassword("");
          alert("Mot de passe modifié avec succès !");
        } else {
          alert("Mot de passe modifié avec succès !");
          // deconnecter l'utilisateur
          localStorage.removeItem('token');
          window.location.assign("/se-connecter");
        }
      })
      .catch((error) => {
        // console.log(error);
      });
  };


  return (
    <div className="user-account">
      <h1>Mon compte</h1>
      <form>
        <div className="user-account--items">
          <label>Votre pseudo</label>
          <input type="text" name="alias" value={userData.alias} onChange={handleInputChange} />
        </div>
        <div className="user-account--items">
          <label>Votre e-mail</label>
          <input type="email" name="email" value={userData.email} onChange={handleInputChange} />
        </div>
        <div className="user-account--items">
          <label>Votre mot de passe actuel</label>
          <input type="password" name="password" value={password.password} onChange={handleChangeCurrentPassword} />
        </div>
        <div className="user-account--items">
          <label>Choisissez votre nouveau mot de passe</label>
          <input type="password" name="new_password" value={password.new_password} onChange={handleChangeNewPassword} />
        </div>
        <button type="button" onClick={handleUpdatePassword} className="edit-btn">Enregistrer les modifications</button>
        <button type="submit" className="delete-btn">Supprimer mon compte</button>
      </form>
    </div>
  );
};

export default UserAccount;