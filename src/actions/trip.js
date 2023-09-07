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

export const HANDLE_SUCCESSFUL_CREATE_TRIP = 'HANDLE_SUCCESSFUL_CREATE_TRIP';
// action pour supprimer un voyage
export const DELETE_USER_TRIP = 'DELETE_USER_TRIP';

export const HANDLE_SUCCESSFUL_DELETE_TRIP = 'HANDLE_SUCCESSFUL_DELETE_TRIP';

export const CHANGE_CREATE_ACTIVITY_FIELD = 'CHANGE_CREATE_ACTIVITY_FIELD';

export const SUBMIT_CREATE_ACTIVITY = 'SUBMIT_CREATE_ACTIVITY';

export const HANDLE_SUCCESSFUL_CREATE_ACTIVITY = 'HANDLE_SUCCESSFUL_CREATE_ACTIVITY';

export const FETCH_TRIP_ACTIVITY = 'FETCH_TRIP_ACTIVITY';

export const SAVE_TRIP_ACTIVITY = 'SAVE_TRIP_ACTIVITY';

export const DELETE_TRIP_ACTIVITY = 'DELETE_TRIP_ACTIVITY';

export const HANDLE_SUCCESSFUL_DELETE_ACTIVITY = 'HANDLE_SUCCESSFUL_DELETE_ACTIVITY';

export const HANDLE_LOGOUT = 'HANDLE_LOGOUT';


export const fetchUserTrips = () => ({
  type: FETCH_USER_TRIPS,
});

export const saveUserTrips = (userTrip) => ({
  type: SAVE_USER_TRIPS,
  userTrip,
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

export const handleSuccessfulCreateTrip = (destination, start_date, end_date) => ({
  type: HANDLE_SUCCESSFUL_CREATE_TRIP,
  destination,
  start_date,
  end_date,
});

export const deleteUserTrip = (tripId) => ({
  type: DELETE_USER_TRIP,
  tripId,
});

export const handleSuccessfulDeleteTrip = (tripId) => ({
  type: HANDLE_SUCCESSFUL_DELETE_TRIP,
  tripId,
});

export const changeCreateActivityField = (name, newValue) => ({
  type: CHANGE_CREATE_ACTIVITY_FIELD,
  name,
  newValue,
});

export const submitCreateActivity = (tripVoyageId) => ({
  type: SUBMIT_CREATE_ACTIVITY,
  tripVoyageId,
});

export const handleSuccessfulCreateActivity = (place, start_date, end_start, transport, accomodation, description) => ({
  type: HANDLE_SUCCESSFUL_CREATE_ACTIVITY,
  place,
  start_date,
  end_start,
  transport,
  accomodation,
  description,
});

export const fetchTripActivity = (voyageId) => ({
  type: FETCH_TRIP_ACTIVITY,
  voyageId,
});

export const saveTripActivity = (tripActivity) => ({
  type: SAVE_TRIP_ACTIVITY,
  tripActivity,
});

export const deleteTripActivity = (tripActivityId) => ({
  type: DELETE_TRIP_ACTIVITY,
  tripActivityId,
});

export const handleSuccessfulDeleteActivity = (tripActivityId) => ({
  type: HANDLE_SUCCESSFUL_DELETE_ACTIVITY,
  tripActivityId,
});

export const handleLogout = () => ({
  type: HANDLE_LOGOUT,
});