import { createStore, combineReducers, compose } from 'redux'

import auth from './state/auth'

const reducers = {
  auth,
}

const composeEnhancers =
  (typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose

const rootReducer = combineReducers(reducers)

const store = createStore(rootReducer, composeEnhancers())

export default store
