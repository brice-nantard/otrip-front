/* eslint-disable prettier/prettier */
// actions en lien avec les voyages
export const FETCH_TRIPS = 'FETCH_TRIPS';
export const SAVE_TRIPS = 'SAVE_TRIPS';

export const fetchRecipes = () => ({
  type: FETCH_TRIPS,
});

export const saveTrips = (trips) => ({
  type: SAVE_TRIPS,
  trips,
});