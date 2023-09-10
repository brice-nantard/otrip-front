/* eslint-disable prettier/prettier */
/* eslint-disable import/prefer-default-export */
export const selectTripDataById = (state, voyageId) => {
  const trips = JSON.parse(localStorage.getItem('userTrips'));
  const trip = trips.find((t) => t.id === voyageId);
  return trip || null;
};

