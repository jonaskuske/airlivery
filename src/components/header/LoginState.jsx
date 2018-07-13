import React from 'react'
import Button from '../Button'
import { connect } from 'react-redux'
import { userSelectors } from '../../state/user'
import { authActions } from '../../state/auth'

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
  user: userSelectors.getUser(state),
})

const mapDispatchToProps = dispatch => ({
  onLoginClick: () => dispatch(authActions.login()),
  onLogoutClick: () => dispatch(authActions.logout()),
})

const LoginState = ({ isAuth, onLoginClick, onLogoutClick, user }) =>
  isAuth ? (
    <Button onClick={onLogoutClick}>{user.name}</Button>
  ) : (
    <Button onClick={onLoginClick}>Login/Registrieren</Button>
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginState)
