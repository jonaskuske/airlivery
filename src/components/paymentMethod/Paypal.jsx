import React from 'react'
import styled from 'styled-components'
import { TextField } from '@mui/material'
import EditHeader from './PaymentEditHeader'
import Alert from '../Alert'

const StyledTextField = styled(TextField)`
  && {
    flex-grow: 1;
    margin-left: 1rem;
  }
`
const StyledPaypal = styled.div`
  position: relative;
  width: 100%;
  padding: 1rem;
  display: flex;
  background: #f0f0f0;
  outline: 2px solid #d6d6d6;
  transition: outline-color 0.25s ease-out;
  justify-content: space-between;
  align-items: center;
`

const StyledLogo = styled.img`
  width: 5rem;
`

class PayPal extends React.Component {
  constructor(props) {
    super(props)
    this.state.value = props.account.mail
    this.state.showForm = props.account.forceEdit
  }
  state = {
    showForm: false,
    showAlert: false,
    value: '',
  }
  handleChange = ({ target }) => this.setState({ value: target.value })
  toggleForm = () => {
    this.setState((prevState) => ({ showForm: !prevState.showForm }))
  }

  showAlert = () => this.setState({ showAlert: true })
  hideAlert = () => this.setState({ showAlert: false })

  componentDidUpdate(prevProps) {
    const { edit, account: originalAccount, updatePaymentMethod } = this.props
    if (prevProps.edit && !edit) {
      this.setState({ showForm: false })
      const newAccount = {
        mail: this.state.value,
      }
      updatePaymentMethod(originalAccount, newAccount)
    }
  }

  render() {
    const { showForm, showAlert, value } = this.state
    const { account, edit, removePaymentMethod } = this.props
    const formVisible = edit && showForm

    const handleConfirm = () => {
      this.hideAlert()
      removePaymentMethod(account)
    }

    return (
      <StyledPaypal>
        <EditHeader
          edit={edit}
          active={formVisible}
          toggleEdit={this.toggleForm}
          onDelete={this.showAlert}
        />
        <StyledLogo
          src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
          alt="PayPal logo"
        />
        <Alert
          open={showAlert}
          onClose={this.hideAlert}
          title="PayPal-Konto entfernen"
          content="Wenn du auf 'Entfernen' drückst, wird das Zahlungsmittel aus deinem Konto entfernt. Dieser Vorgang kann nicht rückgängig gemacht werden."
          buttonTexts={{ confirm: 'Entfernen' }}
          onCancel={this.hideAlert}
          onConfirm={handleConfirm}
        />
        {formVisible ? (
          <StyledTextField
            label="E-Mail"
            type="mail"
            placeholder="max@mustermann.com"
            value={value}
            onChange={this.handleChange}
          />
        ) : (
          <p>{value}</p>
        )}
      </StyledPaypal>
    )
  }
}
export default PayPal
