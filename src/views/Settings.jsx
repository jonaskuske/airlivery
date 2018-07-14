import React from 'react'
import styled, { css } from 'styled-components'
import { Button, withTheme } from '@material-ui/core'
import { connect } from 'react-redux'
import { userSelectors } from '../state/user'
import { authActions, authSelectors } from '../state/auth'
import auth from '../utils/auth'
import { persistor } from '../store'
import { Link } from 'react-router-dom'

const Main = styled.main``

const StyledButton = styled(Button)`
  && {
    color: #fafafa;
    background-color: red;
  }
`
const StyledLink = withTheme()(styled(Link)`
  text-decoration: underline;
  ${({ theme }) => css`
    color: ${theme.palette.primary.main};
  `};
`)

const Settings = ({ user, removeUser, isAuth }) => {
  const deleteAccount = () => {
    persistor.purge()
    auth.logout()
    removeUser(user)
  }

  return (
    <Main className="max-width">
      <h1>Einstellungen</h1>
      <h2>Allgemein</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus id
        inventore assumenda. Commodi, molestias optio. Enim maiores assumenda
        soluta libero corporis? Odit id hic aliquid, dicta quis ea quae ullam.
      </p>
      <h2>Account</h2>
      {isAuth ? (
        <StyledButton
          color="inherit"
          variant="contained"
          onClick={deleteAccount}
        >
          Account löschen
        </StyledButton>
      ) : (
        <p>
          <StyledLink
            to={{
              pathname: '/einloggen',
              state: { from: { pathname: '/einstellungen' } },
            }}
          >
            Einloggen
          </StyledLink>, um Account-Einstellungen zu zeigen.
        </p>
      )}
    </Main>
  )
}

const mapStateToProps = state => ({
  isAuth: authSelectors.getAuthState(state),
  user: userSelectors.getUser(state),
})
const mapDispatchToProps = dispatch => ({
  removeUser: u => dispatch(authActions.removeKnownUser(u)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Settings)
