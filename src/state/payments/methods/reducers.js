import types from './types'

const paymentMethodsReducer = (state = [], { type, method }) => {
  switch (type) {
    case types.ADD_PAYMENT_METHOD:
      return [...state, method]
    default:
      return state
  }
}

export default paymentMethodsReducer
