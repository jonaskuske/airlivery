const getAllContacts = state => (state.contacts.length ? state.contacts : [])

export default {
  getAllContacts,
}
