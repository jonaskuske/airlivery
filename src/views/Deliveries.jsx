import React from 'react'
import DocumentTitle from 'react-document-title'
import DeliveryDisplay from '../components/DeliveryDisplay'
import { connect } from 'react-redux'
import { deliveriesSelectors } from '../state/deliveries'

const Deliveries = ({ deliveries }) => {
  return (
    <DocumentTitle title="Lieferungen | airlivery">
      <main className="max-width">
        <h1>Deine Lieferungen</h1>
        <DeliveryDisplay deliveries={deliveries} />
      </main>
    </DocumentTitle>
  )
}

const { getAllDeliveries, getDeliveriesFromUser, getDeliveriesToUser } =
  deliveriesSelectors
const mapStateToProps = (state) => ({
  deliveries: {
    all: getAllDeliveries(state),
    from: getDeliveriesFromUser(state),
    to: getDeliveriesToUser(state),
  },
})
export default connect(mapStateToProps)(Deliveries)
