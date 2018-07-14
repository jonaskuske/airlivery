import React from 'react'
import Button from '../Button'
import { connect } from 'react-redux'
import { userSelectors } from '../../state/user'
import { Link } from 'react-router-dom'
import auth from '../../utils/auth'

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
  user: userSelectors.getUser(state),
})

const LoginState = ({ isAuth, user }) =>
  isAuth ? (
    <Button onClick={auth.logout}>{user.name}</Button>
  ) : (
    <Button>
      <Link to="/einloggen">Login/Registrieren</Link>
    </Button>
  )

export default connect(mapStateToProps)(LoginState)
