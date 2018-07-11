import React from 'react'
import { connect } from 'react-redux'

import { contactsSelectors } from '../state/contacts'
// import { airspotsSelectors } from '../state/airspots'
// import { paymentsSelectors } from '../state/payments'

import ChoosePackage from './sendSteps/ChoosePackage'
import ChooseDestination from './sendSteps/ChooseDestination'
import ChoosePayment from './sendSteps/ChoosePayment'
import ChooseAirspot from './sendSteps/ChooseAirspot'
import Cart from './sendSteps/Cart'
import Confirmation from './sendSteps/Confirmation'

const steps = [
  ChoosePackage,
  ChooseDestination,
  ChoosePayment,
  ChooseAirspot,
  Cart,
  Confirmation,
]

class SendSteps extends React.Component {
  state = {
    package: undefined,
    destination: undefined,
    airspot: undefined,
    payment: undefined,
  }

  setDestination = destination => this.setState({ destination })
  setPackage = pack => this.setState({ package: pack })
  setAirspot = airspot => this.setState({ airspot })
  setPayment = payment => this.setState({ payment })
  actions = {
    setDestination: this.setDestination,
    setPackage: this.setPackage,
    setAirspot: this.setAirspot,
    setPayment: this.setPayment,
  }

  render() {
    const { step, data } = this.props
    const CurrentStep = steps[step] || steps[steps.length - 1]

    return (
      <CurrentStep data={data} actions={this.actions} selection={this.state} />
    )
  }
}

const mapStateToProps = state => {
  return {
    data: {
      contacts: contactsSelectors.getAllContacts(state),
      // airspots: airspotSelectors.getAllAirspots(state),
      // paymentMethods: paymentsSelectors.getAllPaymentMethods(state),
    },
  }
}

export default connect(mapStateToProps)(SendSteps)
