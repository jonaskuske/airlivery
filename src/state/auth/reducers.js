import types from './types'

import profilePicture from '../../assets/images/jonas.jpg'
const initialState = {
  isAuth: false,
  knownUsers: [
    {
      profilePicture,
      name: 'Jonas Kuske',
      email: 'mail@jonaskuske.com',
      password: 'test123',
      phone: '+491603336948',
      adress: {
        street: 'Sielstraße',
        streetNumber: '5',
        plz: 27568,
        city: 'Bremerhaven',
      },
    },
  ],
}

const authReducer = (state = initialState, { type }) => {
  switch (type) {
    case types.LOGIN:
      return { ...state, isAuth: true }
    case types.LOGOUT:
      return { ...state, isAuth: false }
    default:
      return state
  }
}

export default authReducer
