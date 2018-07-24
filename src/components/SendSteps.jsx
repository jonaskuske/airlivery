import React from 'react'
import { connect } from 'react-redux'

import { contactsSelectors } from '../state/contacts'
import { airspotsSelectors } from '../state/airspots'
import { paymentMethodsSelectors } from '../state/payments/methods'

import ChoosePackageSize from './sendSteps/ChoosePackageSize'
import ChooseDestination from './sendSteps/ChooseDestination'
import ChoosePayment from './sendSteps/ChoosePayment'
import ChooseAirspot from './sendSteps/ChooseAirspot'
import Cart from './sendSteps/Cart'
import Confirmation from './sendSteps/Confirmation'
import packageSizes from '../utils/mocks/packageSizes'

const steps = [
  ChoosePackageSize,
  ChooseDestination,
  ChoosePayment,
  ChooseAirspot,
  Cart,
  Confirmation,
]

class SendSteps extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      destination: props.data.contacts[0],
      airspot: props.data.airspots[0],
      paymentMethod: props.data.paymentMethods[0],
      packageSize: packageSizes[0],
    }
  }

  setDestination = destination => this.setState({ destination })
  setPackageSize = packageSize => this.setState({ packageSize })
  setAirspot = airspot => this.setState({ airspot })
  setPaymentMethod = paymentMethod => this.setState({ paymentMethod })
  actions = {
    setDestination: this.setDestination,
    setPackageSize: this.setPackageSize,
    setAirspot: this.setAirspot,
    setPaymentMethod: this.setPaymentMethod,
  }

  render() {
    const { step, data: stateData } = this.props
    const CurrentStep = steps[step] || steps[steps.length - 1]
    const data = { ...stateData, packageSizes }

    return (
      <CurrentStep data={data} actions={this.actions} selection={this.state} />
    )
  }
}

const mapStateToProps = state => {
  return {
    data: {
      contacts: contactsSelectors.getAddedContacts(state),
      airspots: airspotsSelectors.getAllAirspots(state),
      paymentMethods: paymentMethodsSelectors.getAllPaymentMethods(state),
    },
  }
}

export default connect(mapStateToProps)(SendSteps)
