/* eslint-disable prettier/prettier */
import { combineReducers } from 'redux';

// import des différents reducers
import tripReducer from './trip';

const rootReducer = combineReducers({
  trip: tripReducer,
});

/*
mise en place des tiroirs
*/

export default rootReducer;