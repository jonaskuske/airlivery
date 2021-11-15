import types from './types'

const addDelivery = (delivery) => ({
  type: types.ADD_DELIVERY,
  delivery,
})

const obj = {
  addDelivery,
}

export default obj
