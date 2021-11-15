const getAllDeliveries = (state) => state.deliveries
const getDeliveriesFromUser = (state) =>
  state.deliveries &&
  state.deliveries.filter((delivery) => delivery.type === 'from')

const getDeliveriesToUser = (state) =>
  state.deliveries &&
  state.deliveries.filter((delivery) => delivery.type === 'to')

const obj = {
  getAllDeliveries,
  getDeliveriesFromUser,
  getDeliveriesToUser,
}

export default obj
