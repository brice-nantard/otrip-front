/* eslint-disable prettier/prettier */
import { SAVE_USER_TRIPS } from "../actions/trip";

export const initialState = {
  userTrips: [],
};

const tripReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_USER_TRIPS:
      // console.log(action.trip);
      return {
        ...state,
        userTrips: action.trip,
      };
    default:
      return state;
  }
};

export default tripReducer;