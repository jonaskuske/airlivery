import types from './types'

const initialState = []

const contactsReducer = (state = initialState, { type, contact }) => {
  switch (type) {
    case types.ADD_CONTACT:
      return [...state, contact]
    case types.REMOVE_CONTACT:
      return state.filter(c => c !== contact)
    default:
      return state
  }
}

export default contactsReducer
