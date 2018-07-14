import React from 'react'
import styled from 'styled-components'
import { TextField } from '@material-ui/core'
import CardReactFormContainer from 'card-react'
import EditHeader from './PaymentEditHeader'
import Alert from '../../components/Alert'

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
    this.state.showForm = props.card.forceEdit

    this.nameRef = React.createRef()
    this.expiryRef = React.createRef()
    this.numberRef = React.createRef()
    this.cvcRef = React.createRef()

    this.instance = (CARD_INSTANCE++).toString()
  }
  state = {
    showForm: false,
    showAlert: false,
  }

  toggleForm = () => {
    this.setState(prevState => ({ showForm: !prevState.showForm }))
  }

  showAlert = () => this.setState({ showAlert: true })
  hideAlert = () => this.setState({ showAlert: false })

  componentDidUpdate(prevProps) {
    const { edit, card: originalCard, updatePaymentMethod } = this.props
    if (prevProps.edit && !edit) {
      this.setState({ showForm: false })
      const newCard = {
        number: this.numberRef.current.value,
        cvc: this.cvcRef.current.value,
        expiry: this.expiryRef.current.value,
        name: this.nameRef.current.value,
      }
      updatePaymentMethod(originalCard, newCard)
    }
  }

  render() {
    const { card, edit, removePaymentMethod } = this.props
    const { showForm, showAlert } = this.state
    const formVisible = edit && showForm

    const handleConfirm = () => {
      this.hideAlert()
      removePaymentMethod(card)
    }

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
        initialValues={card || { name: 'Vorname Nachname' }}
        classes={{
          valid: 'valid-input',
          invalid: 'invalid-input',
        }}
      >
        <Alert
          open={showAlert}
          onClose={this.hideAlert}
          title="Kreditkarte löschen"
          content="Wenn du auf 'Entfernen' drückst, wird das Zahlungsmittel aus deinem Konto entfernt. Dieser Vorgang kann nicht rückgängig gemacht werden."
          buttonTexts={{ confirm: 'Entfernen' }}
          onCancel={this.hideAlert}
          onConfirm={handleConfirm}
        />

        <StyledPaymentContainer data-outline>
          <EditHeader
            edit={edit}
            active={formVisible}
            toggleEdit={this.toggleForm}
            onDelete={this.showAlert}
          />

          <div>
            <div id={this.instance} />
          </div>

          <form style={{ display: !formVisible && 'none' }}>
            <InputRow>
              <StyledTextField
                placeholder="Max Mustermann"
                label="Name"
                type="text"
                name={this.instance + 'name'}
                inputProps={{ ref: this.nameRef }}
              />
              <StyledTextField
                placeholder="MM/YY"
                type="text"
                label="Ablaufdatum"
                name={this.instance + 'expiry'}
                inputProps={{ ref: this.expiryRef }}
              />
            </InputRow>
            <InputRow>
              <StyledTextField
                label="Kartennummer"
                placeholder="•••• •••• •••• ••••"
                type="text"
                name={this.instance + 'number'}
                inputProps={{ ref: this.numberRef }}
              />
              <StyledTextField
                label="CVC"
                placeholder="•••"
                type="text"
                name={this.instance + 'cvc'}
                inputProps={{ ref: this.cvcRef }}
              />
            </InputRow>
          </form>
        </StyledPaymentContainer>
      </CardReactFormContainer>
    )
  }
}
