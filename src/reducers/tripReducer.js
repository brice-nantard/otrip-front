/* eslint-disable prettier/prettier */
import { SAVE_USER_TRIPS, SAVE_HOME_TRIPS } from "../actions/trip";

export const initialState = {
  userTrips: [],
  homeTrips: [],
};

const tripReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_USER_TRIPS:
      // console.log(action.trip);
      return {
        ...state,
        userTrips: action.trip,
      };
    
    case SAVE_HOME_TRIPS:
      console.log(action.homeTrip);
      return {
        ...state,
        homeTrips: action.homeTrip,
      }
    default:
      return state;
  }
};

export default tripReducer;