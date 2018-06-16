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
    <Button onClick={onLogoutClick}>
      Martina<span className="mobile-hide"> Mustermann</span>
    </Button>
  ) : (
    <Button onClick={onLoginClick}>
      Login<span className="mobile-hide">/Registrieren</span>
    </Button>
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginState)
