import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
  display: none;
  :checked + label {
    border: 1px solid blue;
  }
`

export default props => {
  return (
    <div>
      <h2>Empfänger auswählen</h2>
      <form>
        <StyledInput type="radio" name="lalala" id="i1" defaultChecked />
        <label htmlFor="i1">Kontakt 1</label>
        <br />
        <StyledInput type="radio" name="lalala" id="i2" />
        <label htmlFor="i2">Kontakt 2</label>
        <br />
        <StyledInput type="radio" name="lalala" id="i3" />
        <label htmlFor="i3">Kontakt 3</label>
        <br />
        <StyledInput type="radio" name="lalala" id="i4" />
        <label htmlFor="i4">Kontakt 4</label>
        <br />
      </form>
    </div>
  )
}
