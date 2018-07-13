const getAllContacts = state => state.contacts || []
const getAddedContacts = state =>
  state.contacts.length ? state.contacts.filter(contact => contact.isAdded) : []
const getUnaddedContacts = state =>
  state.contacts.length
    ? state.contacts.filter(contact => !contact.isAdded)
    : []

export default {
  getAllContacts,
  getAddedContacts,
  getUnaddedContacts,
}
