/* eslint-disable prettier/prettier */
import { legacy_createStore as createStore, applyMiddleware } from 'redux';

import { composeWithDevTools } from '@redux-devtools/extension';

import reducer from '../reducers';

import tripMiddleware from '../middlewares/tripMiddleware';

// on combine devTools avec les middlewares
const enhancers = composeWithDevTools(
  applyMiddleware(
    tripMiddleware
    // ... d'autres middlewares
  )
);

const store = createStore(
  // reducer
  reducer,
  // enhancer
  enhancers
);

export default store;