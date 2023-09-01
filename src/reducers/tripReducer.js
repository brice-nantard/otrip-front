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
  // indique si les voyages sont chargés
  isTripsLoaded: false,
};

const tripReducer = (state = initialState, action = {}) => {
  const {name} = action;

  switch (action.type) {
    case SAVE_USER_TRIPS:
      // console.log(action.userTrip);
      return {
        ...state,
        userTrips: action.userTrip,
        // on indique que les voyages sont chargés
        isTripsLoaded: true,
        };
    
    case SAVE_HOME_TRIPS:
      // console.log(action.homeTrip);
      return {
        ...state,
        homeTrips: action.homeTrip,
        // on indique que les voyages sont chargés
        isTripsLoaded: true,
      }
    
    case CHANGE_CREATE_TRIP_FIELD:
      
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