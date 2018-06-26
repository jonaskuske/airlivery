import React from 'react'
import DocumentTitle from 'react-document-title'
import DotsMobileStepper from '../components/DotsMobileStepper'
import SendSteps from './send/SendSteps'

export default class extends React.Component {
  state = { step: 0 }
  handleStepChange = step => this.setState({ step })

  render() {
    const { step } = this.state
    return (
      <DocumentTitle title="Senden | airlivery">
        <main className="max-width">
          <h1>Paket versenden</h1>
          <DotsMobileStepper
            onStepChange={this.handleStepChange}
            step={step}
            dots={5}
          />
          <SendSteps step={step} />
        </main>
      </DocumentTitle>
    )
  }
}
