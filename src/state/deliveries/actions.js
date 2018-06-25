import types from './types'

const addDelivery = delivery => ({
  type: types.ADD_DELIVERY,
  delivery,
})

export default {
  addDelivery,
}
