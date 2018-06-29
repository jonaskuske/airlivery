import React from 'react'
import styled, { css } from 'styled-components'
import CardReactFormContainer from 'card-react'
import { withTheme } from '@material-ui/core'

let CARD_INSTANCE = 0

const StyledPaymentContainer = withTheme()(styled.div`
  padding: 1rem;
  ${({ theme }) => css`
    border: 2px solid ${theme.palette.primary.main};
  `};
`)

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
        initialValues={this.props.value || { name: 'Vorname Nachname' }}
        // the class name attribute to add to the input field and the corresponding part of the card element,
        // when the input is valid/invalid.
        classes={{
          valid: 'valid-input', // optional — default 'jp-card-valid'
          invalid: 'invalid-input', // optional — default 'jp-card-invalid'
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
