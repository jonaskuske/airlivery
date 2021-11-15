import { generateId } from '../'

export class MockDelivery {
  constructor() {
    this.type = Math.random() > 0.5 ? 'from' : 'to'
    this.date = new Date().toLocaleDateString({ locale: 'de-DE' })
    this.number = generateId()
    this.name = 'Amazon Sendung #784E43d'
    this.from = this.type === 'from' ? 'Jonas Kuske' : 'Viktoria Klat'
    this.to = this.type === 'from' ? 'Viktoria Klat' : 'Jonas Kuske'
  }
}
