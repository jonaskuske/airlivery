import types from './types'

const initialState = [
  {
    name: 'Garageneinfahrt',
    adress: {
      street: 'Lagerstraße',
      streetNumber: '3',
      plz: '',
      city: 'Münsingen',
    },
  },
  {
    name: 'Dachterasse',
    adress: {
      street: 'Lange Gasse',
      streetNumber: '3',
      plz: 73456,
      city: 'Münsingen',
    },
  },
]

const airspotsReducer = (state = initialState, { type, airspot }) => {
  switch (type) {
    case types.ADD_AIRSPOT:
      return [...state, airspot]
    case types.REMOVE_AIRSPOT:
      return state.filter(a => a !== airspot)
    default:
      return state
  }
}

export default airspotsReducer
