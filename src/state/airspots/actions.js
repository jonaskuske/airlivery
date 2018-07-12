import types from './types'

const addAirspot = airspot => ({
  type: types.ADD_AIRSPOT,
  airspot,
})

const removeAirspot = airspot => ({
  type: types.REMOVE_AIRSPOT,
  airspot,
})

export default {
  addAirspot,
  removeAirspot,
}
