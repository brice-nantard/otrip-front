/* eslint-disable prettier/prettier */
/* eslint-disable no-else-return */
/* eslint-disable no-restricted-globals */
import { SAVE_USER_TRIPS, SAVE_HOME_TRIPS, CHANGE_CREATE_TRIP_FIELD } from "../actions/trip";

const DESTINATION_FIELD = 'destination';
const DEPARTURE_DATE_FIELD = 'departure_date';
const ARRIVAL_DATE_FIELD = 'arrival_date';

export const initialState = {
  userTrips: [],
  homeTrips: [],
  destination: '',
  departure_date: '',
  arrival_date: '',
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
    
    case CHANGE_CREATE_TRIP_FIELD:
      const name = action.name;
      
      if (name === DESTINATION_FIELD) {
        return {
          ...state,
          destination: action.newValue,
        };
      } else if (name === DEPARTURE_DATE_FIELD) {
        return {
          ...state,
          departure_date: action.newValue,
        };
        } else if (name === ARRIVAL_DATE_FIELD) {
          return {
            ...state,
            arrival_date: action.newValue,
          }
        }
      return state;
    default:
      return state;
  }
};

export default tripReducer;