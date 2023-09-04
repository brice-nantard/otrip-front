/* eslint-disable prettier/prettier */
/* eslint-disable no-else-return */
/* eslint-disable no-restricted-globals */
import { SAVE_USER_TRIPS, SAVE_HOME_TRIPS, CHANGE_CREATE_TRIP_FIELD, HANDLE_SUCCESSFUL_CREATE_TRIP, DELETE_USER_TRIP, HANDLE_SUCCESSFUL_DELETE_TRIP } from "../actions/trip";
import { HANDLE_LOGOUT } from "../actions/user";

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
        userTrips: {
          ...state.userTrips,
          trip: state.userTrips.trip.filter((trip) => trip.id !== action.id),
        },
      }

    case HANDLE_SUCCESSFUL_DELETE_TRIP:
      return {
        ...state,
        userTrips: {
          ...state.userTrips,
          trip: state.userTrips.trip.filter((trip) => trip.id !== action.id),
        },
      }
    default:
      return state;
  }
};

export default tripReducer;