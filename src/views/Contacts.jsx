import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Zoom } from '@material-ui/core'
import { Add, Check } from '@material-ui/icons'
import { contactsSelectors, contactsActions } from '../state/contacts'
import FloatingActionButton from '../components/MainFloatingActionButton'
import ShowContacts from './contacts/ShowContacts'
import AddContacts from './contacts/AddContacts'

const Main = styled.main`
  && {
    padding-bottom: 1rem;
  }
`
const Title = styled.h1`
  margin-bottom: 0.5rem;
`

class Contacts extends React.Component {
  state = { addView: false }

  toggleView = () => this.setState((prev) => ({ addView: !prev.addView }))

  render() {
    const { addedContacts, unaddedContacts, deleteContact, addContact } =
      this.props

    const { addView } = this.state

    return (
      <Main className="max-width">
        <Title>Adressbuch</Title>

        {!addView ? (
          <ShowContacts
            contacts={addedContacts}
            deleteContact={deleteContact}
          />
        ) : (
          <AddContacts contacts={unaddedContacts} addContact={addContact} />
        )}

        <Zoom in={!addView}>
          <FloatingActionButton onClick={this.toggleView}>
            <Add />
          </FloatingActionButton>
        </Zoom>
        <Zoom in={addView}>
          <FloatingActionButton onClick={this.toggleView}>
            <Check />
          </FloatingActionButton>
        </Zoom>
      </Main>
    )
  }
}

const mapStateToProps = (state) => ({
  addedContacts: contactsSelectors.getAddedContacts(state),
  unaddedContacts: contactsSelectors.getUnaddedContacts(state),
})
const mapDispatchToProps = (dispatch) => ({
  deleteContact: (contact) => dispatch(contactsActions.removeContact(contact)),
  addContact: (contact) => dispatch(contactsActions.addContact(contact)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Contacts)
