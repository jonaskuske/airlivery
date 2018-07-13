import React from 'react'
import heroImage from '../assets/images/drone-hero.jpg'
import HeroImage from '../components/HeroImage'
import MainButtons from './startPage/MainButtonContainer'
import DeliveryDisplay from '../components/DeliveryDisplay'
import { connect } from 'react-redux'
import { userSelectors } from '../state/user'
import { deliveriesSelectors } from '../state/deliveries'

const StartPage = ({ user, deliveries }) => (
  <div>
    <HeroImage
      image={heroImage}
      title={`Willkommen ${user.name.split(' ')[0]}`}
      subtitle="Was wollen Sie tun?"
      smallSubtitle={true}
    />
    <main className="max-width">
      <MainButtons />
      <DeliveryDisplay deliveries={deliveries} />
    </main>
  </div>
)

const {
  getDeliveriesFromUser,
  getDeliveriesToUser,
  getAllDeliveries,
} = deliveriesSelectors
const { getUser } = userSelectors

const mapStateToProps = state => ({
  user: getUser(state),
  deliveries: {
    all: getAllDeliveries(state),
    from: getDeliveriesFromUser(state),
    to: getDeliveriesToUser(state),
  },
})

export default connect(mapStateToProps)(StartPage)
