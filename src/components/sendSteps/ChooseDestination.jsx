import React from 'react'
import Contact from '../Contact'
import styled, { css } from 'styled-components'
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

const StyledInput = withTheme()(styled.input`
  display: none;
  :checked + label > div {
    ${({ theme }) => css`
      outline: 2px solid ${theme.palette.primary.main};
    `};
  }
`)

const StyledLabel = styled.label`
  cursor: pointer;
`

export default props => {
  const { data, actions } = props
  const { contacts } = data

  return (
    <div>
      <h2>Empfänger</h2>
      <p>
        Wähle einen Kontakt aus deinem Adressbuch, an en du dein Paket senden
        möchtest.
      </p>
      <StyledForm>
        {contacts.map((contact, index) => [
          <StyledInput
            type="radio"
            name="contact-select"
            key="input"
            id={`contact-select-${index}`}
            defaultChecked={index === 0}
            onChange={() => actions.setDestination(contact)}
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
