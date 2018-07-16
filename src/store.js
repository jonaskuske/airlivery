import { createStore, combineReducers, compose } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import auth from './state/auth'
import deliveries from './state/deliveries'
import layout from './state/layout'
import errors from './state/errors'
import contacts from './state/contacts'
import airspots from './state/airspots'
import payments from './state/payments'
import user from './state/user'

const reducers = {
  auth,
  deliveries,
  layout,
  errors,
  contacts,
  airspots,
  payments,
  user,
}

const composeEnhancers =
  (typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose

const rootReducer = combineReducers(reducers)

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['errors'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, composeEnhancers())
const persistor = persistStore(store)

export { persistor }
export default store
