import React from 'react'
import { TextField } from '@material-ui/core'

export default ({ handleValueChange, value, ...props }) => {
  return (
    <div {...props}>
      <TextField
        value={value.password}
        name="password"
        label="Passwort"
        onChange={handleValueChange}
      />
      <TextField
        onChange={handleValueChange}
        value={value.confirmPassword}
        name="confirmPassword"
        label="Passwort wiederholen"
        error={value.confirmPassword !== value.password}
      />
    </div>
  )
}
