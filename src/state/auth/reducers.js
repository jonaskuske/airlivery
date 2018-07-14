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

const authReducer = (state = initialState, { type, user }) => {
  switch (type) {
    case types.LOGIN:
      return { ...state, isAuth: true }
    case types.LOGOUT:
      return { ...state, isAuth: false }
    case types.ADD_KNOWN_USER:
      return { ...state, knownUsers: [...state.knownUsers, user] }
    case types.REMOVE_KNOWN_USER:
      return {
        ...state,
        knownUsers: state.knownUsers.filter(u => u !== user),
      }
    default:
      return state
  }
}

export default authReducer
