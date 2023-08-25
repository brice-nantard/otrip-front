/* eslint-disable prettier/prettier */
import axios from 'axios';
import { FETCH_TRIPS, saveTrips } from '../actions/trip';

const tripMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_TRIPS:
      axios
        .get('http://localhost:3001/recipes')
        .then((response) => {
          store.dispatch(saveTrips(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    default:
  }

  // on passe l'action au suivant (middleware suivant ou reducer)
  next(action);
};

export default tripMiddleware;