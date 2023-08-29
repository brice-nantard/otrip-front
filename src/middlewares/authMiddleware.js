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
          // console.log(response);
          // on veut enregistrer les infos de l'utilisateur dans le state
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
