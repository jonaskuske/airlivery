import types from './types'

const addContact = contact => ({
  type: types.ADD_CONTACT,
  contact,
})

const removeContact = contact => ({
  type: types.REMOVE_CONTACT,
  contact,
})

export default {
  addContact,
  removeContact,
}
