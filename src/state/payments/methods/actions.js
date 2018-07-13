import types from './types'

const addPaymentMethod = method => ({
  type: types.ADD_PAYMENT_METHOD,
  method: { ...method, forceEdit: true },
})
const removePaymentMethod = method => ({
  type: types.REMOVE_PAYMENT_METHOD,
  method,
})
const updatePaymentMethod = (originalMethod, method) => ({
  type: types.UPDATE_PAYMENT_METHOD,
  originalMethod,
  method: { ...method, forceEdit: false },
})

export default {
  addPaymentMethod,
  removePaymentMethod,
  updatePaymentMethod,
}
