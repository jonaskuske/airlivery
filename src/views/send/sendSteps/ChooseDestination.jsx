import React from 'react'
import Contact from '../../../components/Contact'
import styled from 'styled-components'
import { withTheme } from '@material-ui/core'

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 901px) {
    flex-flow: row wrap;
    > label {
      width: 40%;
      flex-grow: 1;
      margin-right: 1rem;
      margin-bottom: 1rem;
    }
    > label:nth-child(4n) {
      margin-right: 0;
    }
  }
`

const StyledInput = withTheme(styled.input`
  display: none;
  :checked + label > div {
    outline: 2px solid ${({ theme }) => theme.palette.primary.main};
  }
`)

const StyledLabel = styled.label`
  cursor: pointer;
`

export default function ChooseDestination({
  selection,
  options,
  setSelection,
}) {
  const { contacts } = options

  return (
    <div>
      <h2>Empfänger</h2>
      <p>
        Wähle einen Kontakt aus deinem Adressbuch, an den du dein Paket senden
        möchtest.
      </p>
      <StyledForm>
        {contacts.map((contact, index) => [
          <StyledInput
            type="radio"
            name="contact-select"
            key="input"
            id={`contact-select-${index}`}
            checked={contact === selection.contact}
            onChange={() => setSelection('contact', contact)}
          />,
          <StyledLabel htmlFor={`contact-select-${index}`} key="label">
            <Contact contact={contact} />
          </StyledLabel>,
          <br key="br" />,
        ])}
      </StyledForm>
    </div>
  )
}
