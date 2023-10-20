/* eslint-disable prettier/prettier */
import { legacy_createStore as createStore, applyMiddleware } from 'redux';

import { composeWithDevTools } from '@redux-devtools/extension';

import rootreducer from '../reducers';

import tripMiddleware from '../middlewares/tripMiddleware';
import backMiddleware from '../middlewares/backMiddleware';
import authMiddleware from '../middlewares/authMiddleware';

// on combine devTools avec les middlewares
const enhancers = composeWithDevTools(
  applyMiddleware(
    tripMiddleware,
    authMiddleware,
    backMiddleware
    // ... d'autres middlewares
  )
);

const store = createStore(
  // reducer
  rootreducer,
  // enhancer
  enhancers
);

export default store;