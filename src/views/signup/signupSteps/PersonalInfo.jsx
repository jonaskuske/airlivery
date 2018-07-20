import React from 'react'
import { TextField, Button } from '@material-ui/core'
import styled from 'styled-components'
import UserImage from '../../../components/UserImage'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  > div:last-of-type {
    margin-bottom: 1rem;
  }
`
const InputRow = styled.div`
  display: flex;
  justify-content: space-between;
  > div {
    margin-right: 1rem;
    flex: 10;
  }
  > div:last-of-type {
    margin-right: 0;
  }
`
const StreetInputRow = InputRow.extend`
  > div:last-of-type {
    flex: 3;
  }
`
const CityInputRow = InputRow.extend`
  > div:first-of-type {
    flex: 5;
  }
`
const Subtitle = styled.h2`
  margin: 1.5rem 0 0.5rem 0;
`
export default ({ handleValueChange, value, ...props }) => {
  return (
    <Container {...props}>
      <Subtitle>Name</Subtitle>
      <InputRow>
        <div>
          <TextField
            name="firstName"
            label="Vorname"
            placeholder="Max"
            value={value.firstName}
            onChange={handleValueChange}
            required
          />
          <TextField
            name="lastName"
            label="Nachname"
            placeholder="Mustermann"
            value={value.lastName}
            onChange={handleValueChange}
            required
          />
        </div>
        <div>
          <UserImage image={value.profilePicture} />
          <Button>Bild ändern</Button>
          <Button>Bild entfernen</Button>
        </div>
        <TextField
          name="firstName"
          label="Vorname"
          placeholder="Max"
          value={value.firstName}
          onChange={handleValueChange}
          required
        />
        <TextField
          name="lastName"
          label="Nachname"
          placeholder="Mustermann"
          value={value.lastName}
          onChange={handleValueChange}
          required
        />
      </InputRow>
      <Subtitle>Adresse</Subtitle>
      <StreetInputRow>
        <TextField
          name="street"
          label="Straße"
          placeholder="Lange Straße"
          value={value.street}
          onChange={handleValueChange}
          required
        />
        <TextField
          name="streetNumber"
          label="Nr."
          placeholder="3a"
          value={value.streetNumber}
          onChange={handleValueChange}
          required
        />
      </StreetInputRow>
      <CityInputRow>
        <TextField
          name="plz"
          type="number"
          label="Postleitzahl"
          placeholder="23568"
          value={value.plz}
          onChange={handleValueChange}
          required
        />
        <TextField
          name="city"
          label="Stadt"
          placeholder="Neustadt"
          value={value.city}
          onChange={handleValueChange}
          required
        />
      </CityInputRow>
      <Subtitle>Kontaktdaten</Subtitle>
      <TextField
        name="email"
        label="E-Mail"
        value={value.email}
        type="email"
        placeholder="sample@mail.com"
        onChange={handleValueChange}
        required
      />
      <TextField
        name="phone"
        label="Telefon"
        type="tel"
        value={value.phone}
        placeholder="01604568349"
        onChange={handleValueChange}
      />
    </Container>
  )
}
