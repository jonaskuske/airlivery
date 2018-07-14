import React from 'react'
import styled from 'styled-components'
import { Button } from '@material-ui/core'
import { connect } from 'react-redux'
import { userSelectors } from '../state/user'
import { authActions } from '../state/auth'
import auth from '../utils/auth'
import { persistor } from '../store'

const Main = styled.main``

const Wrapper = styled.div`
  color: #fafafa;
  background-color: red;
`

const Settings = ({ user, removeUser }) => {
  const deleteAccount = () => {
    persistor.purge()
    auth.logout()
    removeUser(user)
  }

  return (
    <Main className="max-width">
      <h1>Einstellungen</h1>
      <Wrapper>
        <Button color="inherit" variant="contained" onClick={deleteAccount}>
          Account löschen
        </Button>
      </Wrapper>
    </Main>
  )
}

const mapStateToProps = state => ({
  user: userSelectors.getUser(state),
})
const mapDispatchToProps = dispatch => ({
  removeUser: u => dispatch(authActions.removeKnownUser(u)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Settings)
