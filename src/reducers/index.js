/* eslint-disable prettier/prettier */
import { combineReducers } from 'redux';

// import des différents reducers
import tripReducer from './tripReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  trip: tripReducer,
  user: userReducer,
});

export default rootReducer;