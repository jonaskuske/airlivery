import React from 'react'
import Contact from '../Contact'
import styled from 'styled-components'

const StyledInput = styled.input`
  display: none;
  :checked + label {
    border: 1px solid blue;
  }
`

const StyledLabel = styled.label`
  box-sizing: border-box;
  padding: 1rem;
`

export default props => {
  return (
    <div>
      <h2>Empfänger auswählen</h2>
      <form>
        <StyledInput type="radio" name="lalala" id="i1" defaultChecked />
        <StyledLabel htmlFor="i1">
          <Contact />
        </StyledLabel>
        <br />
        <StyledInput type="radio" name="lalala" id="i2" />
        <StyledLabel htmlFor="i2">
          <Contact />
        </StyledLabel>
        <br />
        <StyledInput type="radio" name="lalala" id="i3" />
        <StyledLabel htmlFor="i3">
          <Contact />
        </StyledLabel>
        <br />
        <StyledInput type="radio" name="lalala" id="i4" />
        <StyledLabel htmlFor="i4">
          <Contact />
        </StyledLabel>
        <br />
      </form>
    </div>
  )
}
