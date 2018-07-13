import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import DocumentTitle from 'react-document-title'
import ConfirmationBar from '../components/ConfirmationBar'
import InfoTypeSwitcher from './account/InfoTypeSwitcher'
import Links from './account/Links'
import PersonalInfo from './account/PersonalInfo'
import PaymentInfo from './account/PaymentInfo'
import { Zoom } from '@material-ui/core'
import EditButton from './account/EditButton'

import profilePicture from '../assets/images/jonas.jpg'

const mockUser = {
  profilePicture,
  name: 'Jonas Kuske',
  email: 'mail@jonaskuske.com',
  phone: '+491603336948',
  adress: {
    street: 'Sielstraße',
    streetNumber: '5',
    plz: 27568,
    city: 'Bremerhaven',
  },
}

const Title = styled.h1`
  margin-bottom: 0;
`
const Main = styled.main`
  margin-bottom: 1rem;
`

class Account extends React.Component {
  state = { editMode: false, infoType: 'personal' }
  toggleEditMode = () => {
    this.setState(prevState => ({
      editMode: !prevState.editMode,
    }))
  }
  toggleType = () => {
    this.setState(prevState => ({
      infoType: prevState.infoType === 'personal' ? 'payment' : 'personal',
    }))
  }

  render() {
    const { user = mockUser } = this.props
    const { editMode, infoType } = this.state

    return (
      <DocumentTitle title="Account | airlivery">
        <React.Fragment>
          {editMode && <ConfirmationBar onConfirm={this.toggleEditMode} />}

          <Main className="max-width">
            <Title>{user.name}</Title>
            <Links />

            <InfoTypeSwitcher onClick={this.toggleType} infoType={infoType} />

            {infoType === 'personal' ? (
              <PersonalInfo edit={editMode} user={user} />
            ) : (
              <PaymentInfo edit={editMode} user={user} />
            )}

            <Zoom in={!editMode}>
              <EditButton onClick={this.toggleEditMode} />
            </Zoom>
          </Main>
        </React.Fragment>
      </DocumentTitle>
    )
  }
}

const mapStateToProps = state => ({})

export default connect(mapStateToProps)(Account)
