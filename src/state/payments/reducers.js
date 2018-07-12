import { combineReducers } from 'redux'
import methodsReducers from './methods'

const reducers = {
  methods: methodsReducers,
}

export default combineReducers(reducers)
