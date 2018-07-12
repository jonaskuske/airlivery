import { createStore, combineReducers, compose } from 'redux'

import auth from './state/auth'
import deliveries from './state/deliveries'
import layout from './state/layout'
import errors from './state/errors'
import contacts from './state/contacts'
import airspots from './state/airspots'
import payments from './state/payments'

const reducers = {
  auth,
  deliveries,
  layout,
  errors,
  contacts,
  airspots,
  payments,
}

const composeEnhancers =
  (typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose

const rootReducer = combineReducers(reducers)

const store = createStore(rootReducer, composeEnhancers())

export default store
