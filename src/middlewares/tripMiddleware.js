/* eslint-disable prettier/prettier */
import axios from 'axios';
import { FETCH_HOME_TRIPS, FETCH_USER_TRIPS, saveHomeTrips, saveUserTrips } from '../actions/trip';

const tripMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_USER_TRIPS:
      axios
        .get(
          'http://manonsenechal-server.eddi.cloud/projet-12-o-trip-back/public/api/trips/random',
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          }
        )
        .then((response) => {
        // enregistrement des données dans le local storage
          localStorage.setItem('trips', JSON.stringify(response.data));
          // console.log(response.data);
          // console.log(response);
          store.dispatch(saveUserTrips(response.data));
          // console.log(store.getState());
        })
        .catch((error) => {
          // console.log(error);
        });
        break;
    
    case FETCH_HOME_TRIPS:
      axios
        .get('http://manonsenechal-server.eddi.cloud/projet-12-o-trip-back/public/api/trips/random')
        .then((response) => {
          // console.log(response);
          // enregistrement des données dans le state
          localStorage.setItem('homeTrips', JSON.stringify(response.data));
          store.dispatch(saveHomeTrips(response.data));
          // console.log(store.getState());
        })
        .catch ((error) => {
          // console.log(error);
        });
      break;
    default:
  };
  // on passe l'action au suivant (middleware suivant ou reducer)
  next(action);
};

export default tripMiddleware;