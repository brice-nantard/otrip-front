/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/rules-of-hooks */
import axios from 'axios';
import { SUBMIT_CREATE_ACCOUNT, SUBMIT_LOGIN, handleSuccessfulLogin, handleSuccessfulCreateAccount } from '../actions/user';
import { fetchUserTrips } from '../actions/trip';

const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_LOGIN:
      axios
        .post(
          'http://manonsenechal-server.eddi.cloud/projet-12-o-trip-back/public/api/login_check',
          {
            username: store.getState().user.username,
            password: store.getState().user.password,
          }
        )
        .then((response) => {
          // enregistrement des données dans le local storage
          localStorage.setItem('username', response.data.username);
          localStorage.setItem('token', response.data.token);
          
          // enregistrement dans le state
          store.dispatch(
            handleSuccessfulLogin(response.data.username, response.data.token)
          );

          // on veut récupérer les voyages de l'utilisatuer : on dispatch une action qui sera traité par le middleware des voyages
          store.dispatch(fetchUserTrips());
        })
        .catch((error) => {
          console.log(error);
        });
      break;
      
    case SUBMIT_CREATE_ACCOUNT:
      axios
        .post(
          'http://manonsenechal-server.eddi.cloud/projet-12-o-trip-back/public/api/login/create',
          {
            alias: store.getState().user.alias,
            email: store.getState().user.email,
            password: store.getState().user.password,
          }
        )
        .then((response) => {
          // console.log(response);
          // enregistrement dans le state et envoi de l'utilisateur à l'API
          store.dispatch(
            handleSuccessfulCreateAccount(response.data.alias, response.data.email, response.data.password)
          );
        })
       .catch((error) => {
        console.log(error);
       });
      break;
    default:
      return next(action);
  }
  next(action);
};

export default authMiddleware;
