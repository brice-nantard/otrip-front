/* eslint-disable prettier/prettier */

/* eslint-disable radix */
/* eslint-disable @typescript-eslint/no-redeclare */
/* eslint-disable prettier/prettier */
/* eslint-disable no-case-declarations */
import axios from 'axios';
import { FETCH_USERS, saveUsers } from '../actions/back';

const backMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_USERS:
      axios
        .get(
          'http://manonsenechal-server.eddi.cloud/projet-12-o-trip-back/public/back/users',
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          }
        )
        .then((response) => {
          // enregistrement des données dans le local storage
          localStorage.setItem('users', JSON.stringify(response.data));
          // console.log(response.data);
          store.dispatch(saveUsers(response.data));
          // console.log(store.getState());
        })
        .catch((error) => {
          // console.log(error);
        });
      break;

    default:
  }
  // on passe l'action au suivant (middleware suivant ou reducer)
  next(action);
};

export default backMiddleware;
