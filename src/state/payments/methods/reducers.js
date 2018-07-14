import types from './types'

const initialState = [
  {
    type: 'creditcard',
    name: 'Jonas Kuske',
    expiry: '09/19',
    cvc: '873',
    number: '5180427132637683',
  },
  {
    type: 'paypal',
    mail: 'sample@jonaskuske.com',
  },
  {
    type: 'creditcard',
    name: 'Jonas Kuske',
    expiry: '02/21',
    cvc: '356',
    number: '4716796276620325',
  },
]

const paymentMethodsReducer = (
  state = initialState,
  { type, method, originalMethod },
) => {
  switch (type) {
    case types.ADD_PAYMENT_METHOD:
      return [...state, method]
    case types.REMOVE_PAYMENT_METHOD:
      return state.filter(p => p !== method)
    case types.UPDATE_PAYMENT_METHOD:
      return state.map(p => (p === originalMethod ? { ...p, ...method } : p))
    default:
      return state
  }
}

export default paymentMethodsReducer
