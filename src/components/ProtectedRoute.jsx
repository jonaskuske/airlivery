import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { connect } from 'react-redux'
import { authSelectors } from '../state/auth'

const mapStateToProps = (state) => ({
  isAuth: authSelectors.getAuthState(state),
})

const RequireAuth = connect(mapStateToProps)(
  ({ isAuth, children, ...props }) => {
    const location = useLocation()

    return isAuth ? (
      children
    ) : (
      <Navigate replace to="/einloggen" state={{ from: location }} />
    )
  },
)

export default RequireAuth
