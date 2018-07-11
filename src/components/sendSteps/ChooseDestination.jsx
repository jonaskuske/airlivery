import React from 'react'
import Contact from '../Contact'
import styled, { css } from 'styled-components'
import { withTheme } from '@material-ui/core'

const StyledInput = withTheme()(styled.input`
  display: none;
  :checked + label > div {
    ${({ theme }) => css`
      outline: 2px solid ${theme.palette.primary.main};
    `};
  }
`)

export default props => {
  const { data, actions, selection } = props
  const { contacts } = data

  if (!selection.destination) actions.setDestination(contacts[0])

  return (
    <div>
      <h2>Empfänger auswählen</h2>
      <form>
        {contacts.map((contact, index) => [
          <StyledInput
            type="radio"
            name="contact-select"
            key="input"
            id={`contact-select-${index}`}
            defaultChecked={index === 0}
            onChange={() => actions.setDestination(contact)}
          />,
          <label htmlFor={`contact-select-${index}`} key="label">
            <Contact contact={contact} />
          </label>,
          <br key="br" />,
        ])}
      </form>
    </div>
  )
}
