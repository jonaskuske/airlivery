import types from './types'
import mockContacts from '../../utils/mocks/contacts'

const contactsReducer = (state = mockContacts, { type, contact, contacts }) => {
  switch (type) {
    case types.ADD_CONTACT:
      return state.map((c) => (c === contact ? { ...c, isAdded: true } : c))
    case types.REMOVE_CONTACT:
      return state.map((c) => (c === contact ? { ...c, isAdded: false } : c))
    case types.REPLACE_CONTACTS:
      return contacts
    case types.ADD_CONTACTS_TO_LIST:
      return [...state, ...contacts]
    default:
      return state
  }
}

export default contactsReducer
