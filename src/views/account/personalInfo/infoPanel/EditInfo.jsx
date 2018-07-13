import React from 'react'
import styled from 'styled-components'
import { TextField } from '@material-ui/core'

const StyledEditInfo = styled.form`
  margin-top: 2rem;
`
const InputRow = styled.div`
  display: flex;
  > div {
    margin-right: 1rem;
  }
  > div:last-of-type {
    margin-right: 0;
  }
`
const StyledTextField = styled(TextField)`
  && {
    margin-bottom: 0.5rem;
  }
`
const TextFieldStreetNumber = StyledTextField.extend`
  width: 50px;
`
const TextFieldPlz = StyledTextField.extend`
  width: 95px;
`

class EditInfo extends React.Component {
  constructor(props) {
    super(props)

    const { name, adress, email, phone } = props.user
    const { street, streetNumber, plz, city } = adress

    this.state = {
      name,
      email,
      phone,
      adress: {
        street,
        streetNumber,
        plz,
        city,
      },
    }
  }

  // handleNameChange = ({ target }) => this.setState({ name: target.value })
  handleAdressChange = ({ target }) => {
    this.setState(prevState => ({
      adress: { ...prevState.adress, [target.name]: target.value },
    }))
  }
  handlePhoneChange = ({ target }) => {
    const { value: phone } = target
    if (phone && !/^[0-9/+]+$/.test(phone)) return
    this.setState({ phone })
  }

  render() {
    const {
      // name,
      adress,
      phone,
    } = this.state

    return (
      <React.Fragment>
        <h3>Deine Daten</h3>
        <StyledEditInfo>
          {/* <TextField
          required={true}
          label="Name"
          value={name}
          placeholder="Max Mustermann"
          onChange={this.handleNameChange}
        /> */}
          <InputRow>
            <StyledTextField
              required={true}
              label="Straße"
              name="street"
              placeholder="Lange Gasse"
              value={adress.street}
              onChange={this.handleAdressChange}
            />
            <TextFieldStreetNumber
              required={true}
              label="Nr."
              type="number"
              placeholder="1"
              name="streetNumber"
              value={adress.streetNumber}
              onChange={this.handleAdressChange}
            />
          </InputRow>
          <InputRow>
            <TextFieldPlz
              required={true}
              label="Postleitzahl"
              type="number"
              placeholder="27349"
              name="plz"
              value={adress.plz}
              onChange={this.handleAdressChange}
            />
            <StyledTextField
              required={true}
              label="Stadt"
              placeholder="Neustadt"
              name="city"
              value={adress.city}
              onChange={this.handleAdressChange}
            />
          </InputRow>
          <StyledTextField
            label="Telefon"
            placeholder="01603452873"
            value={phone}
            onChange={this.handlePhoneChange}
          />
        </StyledEditInfo>
      </React.Fragment>
    )
  }
}

export default EditInfo
