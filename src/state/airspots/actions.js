import types from './types'

const addAirspot = (airspot) => ({
  type: types.ADD_AIRSPOT,
  airspot: { ...airspot, forceEdit: true },
})

const removeAirspot = (airspot) => ({
  type: types.REMOVE_AIRSPOT,
  airspot,
})

const obj = {
  addAirspot,
  removeAirspot,
}

export default obj
