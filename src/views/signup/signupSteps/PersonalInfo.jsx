import React from 'react'
import { TextField } from '@material-ui/core'

export default ({ handleValueChange, value, ...props }) => {
  return (
    <div {...props}>
      <TextField
        name="firstName"
        label="Vorname"
        placeholder="Max"
        value={value.firstName}
        onChange={handleValueChange}
      />
      <TextField
        name="lastName"
        label="Nachname"
        placeholder="Mustermann"
        value={value.lastName}
        onChange={handleValueChange}
      />
      <TextField
        name="street"
        label="Straße"
        placeholder="Lange Straße"
        value={value.street}
        onChange={handleValueChange}
      />
      <TextField
        name="streetNumber"
        label="Nr."
        placeholder="3a"
        value={value.streetNumber}
        onChange={handleValueChange}
      />
      <TextField
        name="plz"
        type="number"
        label="Postleitzahl"
        placeholder="23568"
        value={value.plz}
        onChange={handleValueChange}
      />
      <TextField
        name="phone"
        label="Telefon"
        value={value.phone}
        placeholder="01604568349"
        onChange={handleValueChange}
      />
      <TextField
        name="email"
        label="E-Mail"
        value={value.email}
        type="email"
        placeholder="sample@mail.com"
        onChange={handleValueChange}
      />
    </div>
  )
}
