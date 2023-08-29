/* eslint-disable prettier/prettier */
import { SAVE_TRIPS } from "../actions/trip";

export const initialState = {
  list: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_TRIPS:
      return {
        ...state,
        list: action.trip,
      };
    default:
      return state;
  }
};

export default reducer;