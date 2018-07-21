import React from 'react'
import styled from 'styled-components'
import DocumentTitle from 'react-document-title'
import { connect } from 'react-redux'
import DotsMobileStepper from '../components/DotsMobileStepper'
import SendSteps from '../components/SendSteps'

import packageSizes from '../utils/mocks/packageSizes'
import { contactsSelectors } from '../state/contacts'
import { airspotsSelectors } from '../state/airspots'
import { paymentMethodsSelectors } from '../state/payments/methods'

const Main = styled.main`
  h1 {
    margin: 0.7rem 0 0 0;
  }
  h2 {
    margin: 0.5rem 0;
  }
`

class Send extends React.Component {
  constructor(props) {
    super(props)

    const { airspots, contacts, paymentMethods } = props

    this.state = {
      activeStep: 0,
      completed: false,
      options: {
        packageSizes,
        airspots,
        contacts,
        paymentMethods,
      },
      selection: {
        packageSize: packageSizes[0],
        airspot: airspots[0],
        contact: contacts[0],
        paymentMethod: paymentMethods[0],
      },
    }
  }

  setSelection = (type, val) => {
    this.setState(prev => ({ selection: { ...prev.selection, [type]: val } }))
  }
  onBack = () => this.setState(prev => ({ activeStep: prev.activeStep - 1 }))
  onNext = () => this.setState(prev => ({ activeStep: prev.activeStep + 1 }))
  onDone = () => this.setState({ completed: true })

  render() {
    const { activeStep, selection, options, completed } = this.state
    if (!completed) {
      return (
        <DocumentTitle title="Senden | airlivery">
          <Main className="max-width">
            <h1>Paket versenden</h1>
            <DotsMobileStepper
              onNext={this.onNext}
              onBack={this.onBack}
              activeStep={activeStep}
              steps={5}
            />
            <SendSteps
              activeStep={activeStep}
              selection={selection}
              options={options}
              setSelection={this.setSelection}
              onDone={this.onDone}
            />
          </Main>
        </DocumentTitle>
      )
    } else {
      return (
        <p>
          <b>Success</b>
        </p>
      )
    }
  }
}

const mapStateToProps = state => ({
  contacts: contactsSelectors.getAddedContacts(state),
  airspots: airspotsSelectors.getAllAirspots(state),
  paymentMethods: paymentMethodsSelectors.getAllPaymentMethods(state),
})

export default connect(mapStateToProps)(Send)
