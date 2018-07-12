import types from './types'
import { generateId } from '../../utils'

class MockDelivery {
  constructor() {
    this.type = Math.random() > 0.5 ? 'from' : 'to'
    this.date = new Date().toLocaleDateString({ locale: 'de-DE' })
    this.number = generateId()
    this.name = 'Amazon Sendung #784E43d'
    this.from = this.type === 'from' ? 'Jonas Kuske' : 'Viktoria Klat'
    this.to = this.type === 'from' ? 'Viktoria Klat' : 'Jonas Kuske'
  }
}

const initialState = [...Array(7)].map(() => new MockDelivery())

const deliveriesReducer = (state = initialState, { type, delivery }) => {
  switch (type) {
    case types.ADD_DELIVERY:
      return [delivery, ...state]

    default:
      return state
  }
}

export default deliveriesReducer
