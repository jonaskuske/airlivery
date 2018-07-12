import React from 'react'
import DocumentTitle from 'react-document-title'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'
import PersonalPaymentSwitcher from './account/PersonalPaymentSwitcher'
import ConfirmationBar from '../components/ConfirmationBar'
import AccountView from './account/AccountView'
import AccountEdit from './account/AccountEdit'
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

export default withRouter(({ user = mockUser, history }) => {
  const {
    location: { pathname, search },
  } = history

  const accountMode = pathname.includes('/account/zahlung')
    ? 'payment'
    : 'personal'
  const editMode = search.includes('?edit')

  return (
    <DocumentTitle title="Account | airlivery">
      <React.Fragment>
        {editMode && (
          <ConfirmationBar onConfirm={() => history.push(pathname)} />
        )}

        <main className="max-width">
          <Title>{user.name}</Title>
          <PersonalPaymentSwitcher history={history} />

          {editMode ? (
            <AccountEdit user={user} mode={accountMode} />
          ) : (
            <AccountView user={user} mode={accountMode} />
          )}

          {!editMode && (
            <EditButton onClick={() => history.push(pathname + '?edit')} />
          )}
        </main>
      </React.Fragment>
    </DocumentTitle>
  )
})
