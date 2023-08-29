/* eslint-disable prettier/prettier */
import axios from 'axios';
import { FETCH_USER_TRIPS, saveUserTrips } from '../actions/trip';

const tripMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_USER_TRIPS:
      axios
        .get(
          'http://manonsenechal-server.eddi.cloud/projet-12-o-trip-back/public/api/trips',
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          }
        )
        .then((response) => {
          console.log(response);
          store.dispatch(saveUserTrips(response.data));
          console.log(store.getState());
        })
        .catch((error) => {
          console.log(error);

        });
      break;
    default:
  };
  // on passe l'action au suivant (middleware suivant ou reducer)
  next(action);
};

export default tripMiddleware;