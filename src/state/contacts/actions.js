import types from './types'

const addContact = (contact) => ({
  type: types.ADD_CONTACT,
  contact,
})

const removeContact = (contact) => ({
  type: types.REMOVE_CONTACT,
  contact,
})

const addContactsToList = (contacts) => ({
  type: types.ADD_CONTACTS_TO_LIST,
  contacts,
})

const obj = {
  addContact,
  removeContact,
  addContactsToList,
}

export default obj
