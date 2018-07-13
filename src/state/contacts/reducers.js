import types from './types'
import jonasImage from '../../assets/images/jonas.jpg'
import womanImage from '../../assets/images/woman.jpg'
import defaultAvatar from '../../assets/images/generic-user.png'

const initialState = [
  {
    name: 'Jonas Kuske',
    image: jonasImage,
    adress: {
      street: 'Sielstraße',
      streetNumber: '5',
      plz: 27568,
      city: 'Bremerhaven',
    },
  },
  {
    name: 'Marta Müller',
    image: womanImage,
    adress: {
      street: 'Lange Gasse',
      streetNumber: '17a',
      plz: 72070,
      city: 'Tübingen',
    },
  },

  {
    name: 'John Doe',
    image: defaultAvatar,
    adress: {
      street: 'Eine Straße',
      streetNumber: '123/2',
      plz: 38569,
      city: 'Unterstätten',
    },
  },
]

const contactsReducer = (state = initialState, { type, contact, contacts }) => {
  switch (type) {
    case types.ADD_CONTACT:
      return [...state, contact]
    case types.REMOVE_CONTACT:
      return state.filter(c => c !== contact)
    case types.REPLACE_CONTACTS:
      return contacts
    default:
      return state
  }
}

export default contactsReducer
