/* eslint-disable prettier/prettier */
/* eslint-disable no-else-return */
/* eslint-disable no-restricted-globals */
import {
  SAVE_USER_TRIPS,
  SAVE_HOME_TRIPS,
  HANDLE_SUCCESSFUL_CREATE_TRIP,
  DELETE_USER_TRIP,
  HANDLE_SUCCESSFUL_DELETE_TRIP,
  CHANGE_CREATE_TRIP_FIELD,
  CHANGE_CREATE_ACTIVITY_FIELD,
  HANDLE_SUCCESSFUL_CREATE_ACTIVITY
} from "../actions/trip";

import { HANDLE_LOGOUT } from "../actions/user";

export const initialState = {
  userTrips: [],
  homeTrips: [],
  destination: '',
  start_date: '',
  end_date: '',
  // indique si les voyages sont chargés
  isTripsLoaded: false,
  // lieu de l'activité
  place: '',
  // date de début de l'activité
  // start_date: '',
  // date de fin de l'activité
  end_start: '',
  // transport 
  transport: '',
  // hébergement
  accomodation: '',
  // description de l'activité
  description : '',
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
      if (name === 'destination') {
        return {
          ...state,
          destination: action.newValue,
        };
      } else if (name === 'start_date') {
        return {
          ...state,
          start_date: action.newValue,
        };
        } else if (name === 'end_date') {
          return {
            ...state,
            end_date: action.newValue,
          }
        }
      return state;
    
    case HANDLE_SUCCESSFUL_CREATE_TRIP:
      return {
        ...state,
        destination: '',
        start_date: '',
        end_date: '',
      }

    case HANDLE_LOGOUT:
      return {
        userTrips: [],
        destination: '',
        start_date: '',
        end_date: '',
      }

    case DELETE_USER_TRIP:
      return {
        ...state,
        userTrips: state.userTrips.trip.filter((trip) => trip.id !== action.id),
      }

    case HANDLE_SUCCESSFUL_DELETE_TRIP:
      return {
        ...state,
        userTrips: state.userTrips.trip.filter((trip) => trip.id !== action.id),
      }

    case CHANGE_CREATE_ACTIVITY_FIELD:
      if (name === 'place') {
        return {
          ...state,
          place : action.newValue,
        };
      } else if (name === 'start_date') {
        return {
          ...state,
          start_date : action.newValue,
        };
      } else if (name === 'end_start') {
        return {
        ...state,
        end_start : action.newValue,
        };
      } else if (name === 'transport') {
        return {
          ...state,
          transport : action.newValue,
        };
      } else if (name === 'accomodation') {
        return {
        ...state,
          accomodation : action.newValue,
        };
      } else if (name === 'description') {
        return {
          ...state,
          description : action.newValue,
        };
      }
      return state;

    case HANDLE_SUCCESSFUL_CREATE_ACTIVITY:
      return {
        ...state,
        place: '',
        start_date: '',
        end_start: '',
        transport: '',
        accomodation: '',
        description: '',
      }
    default:
      return state;
  }
};

export default tripReducer;