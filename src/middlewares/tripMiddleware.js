/* eslint-disable radix */
/* eslint-disable @typescript-eslint/no-redeclare */
/* eslint-disable prettier/prettier */
/* eslint-disable no-case-declarations */
import axios from 'axios';
import {
  DELETE_TRIP_ACTIVITY,
  DELETE_USER_TRIP,
  FETCH_HOME_TRIPS,
  FETCH_TRIP_ACTIVITY,
  FETCH_USER_TRIPS,
  SUBMIT_CREATE_ACTIVITY,
  SUBMIT_CREATE_TRIP,
  handleSuccessfulCreateActivity,
  handleSuccessfulCreateTrip,
  handleSuccessfulDeleteActivity,
  handleSuccessfulDeleteTrip,
  saveHomeTrips,
  saveTripActivity,
  saveUserTrips,
} from '../actions/trip';

const tripMiddleware = (store) => (next) => (action) => {
  // const { voyageId } = action;
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
        .get(
          'http://manonsenechal-server.eddi.cloud/projet-12-o-trip-back/public/api/trips/random'
        )
        .then((response) => {
          // console.log(response);
          // enregistrement des données dans le state
          localStorage.setItem('homeTrips', JSON.stringify(response.data));
          store.dispatch(saveHomeTrips(response.data));
          // console.log(store.getState());
        })
        .catch((error) => {
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
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          }
        )
        .then((response) => {
          // enregistrement dans le state et envoi à l'API
          store.dispatch(
            handleSuccessfulCreateTrip(
              response.data.id,
              response.data.destination,
              response.data.start_date,
              response.data.end_date
            )
          );
        })
        .catch((error) => {
          // console.log(error);
        });
      break;

    case DELETE_USER_TRIP:
      const { tripId } = action;
      axios
        .delete(
          `http://manonsenechal-server.eddi.cloud/projet-12-o-trip-back/public/api/trip/${tripId}`
        )
        .then((response) => {
          // console.log(response);
          // si suppression réussie, mettre à jour le state
          store.dispatch(handleSuccessfulDeleteTrip(tripId));
        })
        .catch((error) => {
          // console.log(error);
        });
      break;

    case SUBMIT_CREATE_ACTIVITY:
      const { tripVoyageId } = action;
      axios
        .post(
          `http://manonsenechal-server.eddi.cloud/projet-12-o-trip-back/public/api/trip/${tripVoyageId}/step/add`,
          {
            place: store.getState().trip.place,
            start_date: store.getState().trip.start_date,
            end_start: store.getState().trip.end_start,
            transport: { id : parseInt(store.getState().trip.transport) },
            accomodation: { id : parseInt(store.getState().trip.accomodation) },
            description: store.getState().trip.description,
          }
        )
        .then((response) => {
          // console.log(response);
          // enregistrement dans le state et envoi à l'API
          store.dispatch(
            handleSuccessfulCreateActivity(
              response.data.place,
              response.data.start_date,
              response.data.end_start,
              response.data.transport,
              response.data.accomodation,
              response.data.description
            )
          );
        })
        .catch((error) => {
          // console.log(error);
        });
      break;

    // case FETCH_TRIP_ACTIVITY:
    //   const { voyageId } = action;
    //   axios
    //     .get(
    //       `http://manonsenechal-server.eddi.cloud/projet-12-o-trip-back/public/api/trip/${voyageId}/steps`
    //     )
    //     .then((response) => {
    //       // console.log(response);
    //       // enregistrement dans le local storage
    //       localStorage.setItem('tripActivity', JSON.stringify(response.data));
    //       store.dispatch(saveTripActivity(response.data));
    //     })
    //     .catch((error) => {
    //       // console.log(error);
    //     });
    //   break;
    
    // case DELETE_TRIP_ACTIVITY:
    //   const { tripActivityId } = action;
    //   axios
    //     .delete(
    //       `http://manonsenechal-server.eddi.cloud/projet-12-o-trip-back/public/api/step/${tripActivityId}`
    //     )
    //     .then((response) => {
    //       // console.log(response);
    //       // si suppression réussie, mettre à jour le state et le local storage
    //       store.dispatch(handleSuccessfulDeleteActivity(tripActivityId));
    //     })
    //     .catch((error) => {
    //       // console.log(error);
    //     });
    //   break;
    default:
  }
  // on passe l'action au suivant (middleware suivant ou reducer)
  next(action);
};

export default tripMiddleware;
