/* eslint-disable prettier/prettier */
/* eslint-disable no-else-return */
/* eslint-disable no-restricted-globals */
import { SAVE_USER_TRIPS, SAVE_HOME_TRIPS, CHANGE_CREATE_TRIP_FIELD } from "../actions/trip";
import { HANDLE_LOGOUT } from "../actions/user";

const DESTINATION_FIELD = 'destination';
const START_DATE_FIELD = 'start_date';
const END_DATE_FIELD = 'end_date';

export const initialState = {
  userTrips: [],
  homeTrips: [],
  destination: '',
  start_date: '',
  end_date: '',
};

const tripReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_USER_TRIPS:
      // console.log(action.userTrip);
      return {
        ...state,
        userTrips: action.userTrip,
      };
    
    case SAVE_HOME_TRIPS:
      // console.log(action.homeTrip);
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
      } else if (name === START_DATE_FIELD) {
        return {
          ...state,
          start_date: action.newValue,
        };
        } else if (name === END_DATE_FIELD) {
          return {
            ...state,
            end_date: action.newValue,
          }
        }
      return state;

      case HANDLE_LOGOUT:
        return {
          userTrips: [],
          destination: '',
          start_date: '',
          end_date: '',
        }

    default:
      return state;
  }
};

export default tripReducer;