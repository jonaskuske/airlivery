import types from './types'

import profilePicture from '../../assets/images/jonas.jpg'
const mockUser = {
  profilePicture,
  name: 'Jonas Kuske',
  email: 'mail@jonaskuske.com',
  phone: '+491603336948',
  adress: {
    street: 'Sielstraße',
    streetNumber: '5',
    plz: 27568,
    city: 'Bremerhaven',
  },
}

const userReducer = (state = mockUser, { type, user }) => {
  switch (type) {
    case types.UPDATE_USER:
      return { ...state, ...user }
    default:
      return state
  }
}

export default userReducer
