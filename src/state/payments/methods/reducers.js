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

const paymentMethodsReducer = (state = initialState, { type, method }) => {
  switch (type) {
    case types.ADD_PAYMENT_METHOD:
      return [...state, method]
    default:
      return state
  }
}

export default paymentMethodsReducer
