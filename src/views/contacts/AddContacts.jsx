import React from 'react'
import styled from 'styled-components'
import { TextField, InputAdornment } from '@material-ui/core'
import { Search } from '@material-ui/icons'
import Contact from '../../components/Contact'
import { includesString, createPropertyComparer } from '../../utils'

const compareName = createPropertyComparer('name')

const Title = styled.h2`
  margin-bottom: 0.5rem;
`

const StyledContact = styled(Contact)`
  margin-top: 1rem;
`

export default class extends React.Component {
  state = { query: '' }
  setQuery = ({ target }) => this.setState({ query: target.value })

  render() {
    const { contacts, addContact } = this.props
    const { query } = this.state

    let filteredContacts = contacts
    if (query)
      filteredContacts = contacts.filter(contact => {
        return (
          includesString(contact.name, query) ||
          Object.values(contact.adress).filter(str =>
            includesString(str, query),
          ).length
        )
      })

    return (
      <React.Fragment>
        <Title>Kontakte hinzufügen</Title>
        <TextField
          label="Kontakt suchen"
          placeholder="Name oder Adresse..."
          onChange={this.setQuery}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Search />
              </InputAdornment>
            ),
          }}
        />
        {(filteredContacts.length &&
          filteredContacts
            .sort(compareName)
            .map((contact, index) => (
              <StyledContact
                contact={contact}
                key={index}
                allowInteractions={true}
                onAdd={addContact}
              />
            ))) || <p>Keine Kontakte gefunden.</p>}
      </React.Fragment>
    )
  }
}
