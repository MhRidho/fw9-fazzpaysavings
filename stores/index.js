import { configureStore, createStore, applyMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
// import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk'
import reducer from './reducers';

export const store = configureStore({
  reducer,
  middleware: [thunk, logger]
});