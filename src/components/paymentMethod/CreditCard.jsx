import React from 'react'
import styled from 'styled-components'
import CardReactFormContainer from 'card-react'

let CARD_INSTANCE = 0

const StyledPaymentContainer = styled.div`
  padding: 1rem;
  transition: outline-color 0.25s ease-out;
  outline: 2px solid #d6d6d6;
  background: #f0f0f0;
`

const StyledCardContainer = styled.div``

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.instance = (CARD_INSTANCE++).toString()
  }
  render() {
    const { showForm } = this.props
    return (
      <CardReactFormContainer
        container={this.instance}
        formInputsNames={{
          number: this.instance + 'number',
          expiry: this.instance + 'expiry',
          cvc: this.instance + 'cvc',
          name: this.instance + 'name',
        }}
        messages={{ validDate: 'gültig\nbis', monthYear: 'Monat/Jahr' }}
        initialValues={this.props.card || { name: 'Vorname Nachname' }}
        classes={{
          valid: 'valid-input',
          invalid: 'invalid-input',
        }}
      >
        <StyledPaymentContainer>
          <StyledCardContainer>
            <div id={this.instance} />
          </StyledCardContainer>
          <form style={{ display: !showForm && 'none' }}>
            <input
              placeholder="Full name"
              type="text"
              name={this.instance + 'name'}
            />
            <input
              placeholder="Kartennummer"
              type="text"
              name={this.instance + 'number'}
            />
            <input
              placeholder="MM/YY"
              type="text"
              name={this.instance + 'expiry'}
            />
            <input placeholder="CVC" type="text" name={this.instance + 'cvc'} />
          </form>
        </StyledPaymentContainer>
      </CardReactFormContainer>
    )
  }
}
