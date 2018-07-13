import React from 'react'
import styled from 'styled-components'
import { TextField } from '@material-ui/core'
import CardReactFormContainer from 'card-react'
import EditHeader from './creditCard/CreditCardHeader'

let CARD_INSTANCE = 0

const StyledPaymentContainer = styled.div`
  position: relative;
  padding: 1rem;
  transition: outline-color 0.25s ease-out;
  outline: 2px solid #d6d6d6;
  background: #f0f0f0;
`

class StatefulTextField extends React.Component {
  render() {
    return <TextField {...this.props} />
  }
}
const InputRow = styled.div`
  display: flex;
  justify-content: space-between;
  > div {
    margin-right: 1rem;
  }
  > div:last-of-type {
    margin-right: 0;
    width: 100px;
  }
`
const StyledTextField = styled(StatefulTextField)`
  && {
    margin-top: 1rem;
  }
`

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.instance = (CARD_INSTANCE++).toString()
  }
  state = {
    showForm: false,
  }

  toggleForm = () => {
    this.setState(prevState => ({ showForm: !prevState.showForm }))
  }

  render() {
    const { edit } = this.props
    const { showForm } = this.state

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
          <EditHeader
            edit={edit}
            active={showForm}
            toggleEdit={this.toggleForm}
          />

          <div>
            <div id={this.instance} />
          </div>

          <form style={{ display: !showForm && 'none' }}>
            <InputRow>
              <StyledTextField
                placeholder="Max Mustermann"
                label="Name"
                type="text"
                name={this.instance + 'name'}
              />
              <StyledTextField
                placeholder="MM/YY"
                type="text"
                label="Ablaufdatum"
                name={this.instance + 'expiry'}
              />
            </InputRow>
            <InputRow>
              <StyledTextField
                label="Kartennummer"
                placeholder="•••• •••• •••• ••••"
                type="text"
                name={this.instance + 'number'}
              />
              <StyledTextField
                label="CVC"
                placeholder="•••"
                type="text"
                name={this.instance + 'cvc'}
              />
            </InputRow>
          </form>
        </StyledPaymentContainer>
      </CardReactFormContainer>
    )
  }
}
