/* eslint-disable prettier/prettier */
// actions en lien avec les voyages
// action pour récupérer les voyages de l'utilisateur
export const FETCH_USER_TRIPS = 'FETCH_USER_TRIPS';
export const SAVE_USER_TRIPS = 'SAVE_USER_TRIPS';

export const fetchUserTrips = () => ({
  type: FETCH_USER_TRIPS,
});

export const saveUserTrips = (trip) => ({
  type: SAVE_USER_TRIPS,
  trip,
});