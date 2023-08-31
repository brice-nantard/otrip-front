/* eslint-disable prettier/prettier */
// actions en lien avec les voyages
// action pour récupérer les voyages de l'utilisateur
export const FETCH_USER_TRIPS = 'FETCH_USER_TRIPS';
export const SAVE_USER_TRIPS = 'SAVE_USER_TRIPS';

export const FETCH_HOME_TRIPS = 'FETCH_HOME_TRIPS';
export const SAVE_HOME_TRIPS = 'SAVE_HOME_TRIPS';

// action pour gérer les champs du formulaire créer un voyage
export const CHANGE_CREATE_TRIP_FIELD = 'CHANGE_CREATE_TRIP_FIELD';
// action interceptée par le middleware pour gérer l'API de création d'un voyage
export const SUBMIT_CREATE_TRIP = 'SUBMIT_CREATE_TRIP';

export const fetchUserTrips = () => ({
  type: FETCH_USER_TRIPS,
});

export const saveUserTrips = (trip) => ({
  type: SAVE_USER_TRIPS,
  trip,
});

export const fetchHomeTrips = () => ({
  type: FETCH_HOME_TRIPS,
});

export const saveHomeTrips = (homeTrip) => ({
  type: SAVE_HOME_TRIPS,
  homeTrip,
});

export const changeCreateTripField = (name, newValue) => ({
  type: CHANGE_CREATE_TRIP_FIELD,
  name,
  newValue,
});

export const submitCreateTrip = () => ({
  type: SUBMIT_CREATE_TRIP,
});