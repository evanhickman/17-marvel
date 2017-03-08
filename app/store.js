import Vue from 'vue';
import Revue from 'revue';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const initialState = {  };

const store = createStore(
  reducer,
  initialState,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

const revue = new Revue(Vue, store);

export default revue;
