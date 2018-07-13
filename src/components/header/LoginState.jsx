import React from 'react'
import Button from '../Button'
import { connect } from 'react-redux'
import { authActions } from '../../state/auth'

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
})

const mapDispatchToProps = dispatch => ({
  onLoginClick: () => dispatch(authActions.login()),
  onLogoutClick: () => dispatch(authActions.logout()),
})

const LoginState = ({ isAuth, onLoginClick, onLogoutClick }) =>
  isAuth ? (
    <Button onClick={onLogoutClick}>Jonas Kuske</Button>
  ) : (
    <Button onClick={onLoginClick}>Login/Registrieren</Button>
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginState)
