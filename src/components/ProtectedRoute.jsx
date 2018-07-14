import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { authSelectors } from '../state/auth'

const mapStateToProps = state => ({
  isAuth: authSelectors.getAuthState(state),
})

const Inner = connect(mapStateToProps)(
  ({ isAuth, component: Component, ...props }) => {
    return isAuth ? (
      <Component {...props} />
    ) : (
      <Redirect
        to={{ pathname: '/einloggen', state: { from: props.location } }}
      />
    )
  },
)

const ProtectedRoute = ({ component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => <Inner component={component} {...props} />}
    />
  )
}

export default ProtectedRoute
