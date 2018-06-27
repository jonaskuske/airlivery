import React from 'react'
import DocumentTitle from 'react-document-title'
import DotsMobileStepper from '../components/DotsMobileStepper'
import SendSteps from '../components/SendSteps'
import styled from 'styled-components'

const StyledSend = styled.main`
  h1 {
    margin: 0.7rem 0 0 0;
  }
  h2 {
    margin: 0.5rem 0;
  }
`

export default class extends React.Component {
  state = { step: 0 }
  handleStepChange = step => this.setState({ step })

  render() {
    const { step } = this.state
    return (
      <DocumentTitle title="Senden | airlivery">
        <StyledSend className="max-width">
          <h1>Paket versenden</h1>
          <DotsMobileStepper
            onStepChange={this.handleStepChange}
            step={step}
            dots={5}
          />
          <SendSteps step={step} />
        </StyledSend>
      </DocumentTitle>
    )
  }
}
