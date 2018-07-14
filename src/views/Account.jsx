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

import { userSelectors } from '../state/user'
import { airspotsSelectors } from '../state/airspots'
import { paymentMethodsSelectors } from '../state/payments/methods'

import { airspotsActions } from '../state/airspots'
import { userActions } from '../state/user'

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
    const { user, paymentMethods, airspots, actions } = this.props
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
              <PersonalInfo
                edit={editMode}
                user={user}
                airspots={airspots}
                actions={actions}
              />
            ) : (
              <PaymentInfo
                edit={editMode}
                user={user}
                paymentMethods={paymentMethods}
              />
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

const { getAllPaymentMethods } = paymentMethodsSelectors

const mapStateToProps = state => ({
  paymentMethods: getAllPaymentMethods(state),
  user: userSelectors.getUser(state),
  airspots: airspotsSelectors.getAllAirspots(state),
})

const mapDispatchToProps = dispatch => ({
  actions: {
    removeAirspot: a => dispatch(airspotsActions.removeAirspot(a)),
    addAirspot: a => dispatch(airspotsActions.addAirspot(a)),
    updateUser: u => dispatch(userActions.updateUser(u)),
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Account)
