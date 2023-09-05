/* eslint-disable prettier/prettier */
/* eslint-disable no-case-declarations */
import axios from 'axios';
import {
  DELETE_USER_TRIP,
  FETCH_HOME_TRIPS,
  FETCH_USER_TRIPS,
  SUBMIT_CREATE_TRIP,
  handleSuccessfulCreateTrip,
  handleSuccessfulDeleteTrip,
  saveHomeTrips,
  saveUserTrips
} from '../actions/trip';

const tripMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_USER_TRIPS:
      axios
        .get(
          'http://manonsenechal-server.eddi.cloud/projet-12-o-trip-back/public/api/users',
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          }
        )
        .then((response) => {
        // enregistrement des données dans le local storage
          localStorage.setItem('userTrips', JSON.stringify(response.data));
          // console.log(response.data);
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
    
    case SUBMIT_CREATE_TRIP:
      axios
        .post(
          'http://manonsenechal-server.eddi.cloud/projet-12-o-trip-back/public/api/trip/add',
          {
            destination: store.getState().trip.destination,
            start_date: store.getState().trip.start_date,
            end_date: store.getState().trip.end_date,
          }
        )
        .then((response) => {
          console.log(response);
          // enregistrement dans le state et envoi de l'utilisateur à l'API
          store.dispatch(
            handleSuccessfulCreateTrip(response.data.destination, response.data.start_date, response.data.end_date)
          );
        })
        .catch((error) => {
          console.log(error);
        });
      break;

    case DELETE_USER_TRIP:
      const {tripId} = action;
      axios
        .delete(
          'http://manonsenechal-server.eddi.cloud/projet-12-o-trip-back/public/api/trip/{tripId}',
        )
        .then((response) => {
          console.log(response);
          // si suppression réussie, mettre à jour le state
          store.dispatch(handleSuccessfulDeleteTrip(tripId));          
        })
        .catch((error) => {
          console.log(error);
        })
      break;
    default:
  };
  // on passe l'action au suivant (middleware suivant ou reducer)
  next(action);
};

export default tripMiddleware;