/* eslint-disable prettier/prettier */
import axios from 'axios';
import { SUBMIT_LOGIN, handleSuccessfulLogin } from '../actions/user';

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
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    default:
  }
  next(action);
};

export default authMiddleware;
