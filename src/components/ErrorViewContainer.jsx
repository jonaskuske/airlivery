import React from 'react'
import { connect } from 'react-redux'

import ErrorView from './errorViewContainer/ErrorView'
import { errorsActions, errorsSelectors } from '../state/errors'

const ErrorContainer = (props) => {
  const { errors, setAsSeen } = props
  const [lastError] = errors.reverse()
  const error = lastError && !lastError.seen && lastError

  return <ErrorView error={error} errors={errors} setAsSeen={setAsSeen} />
}

const mapStateToProps = (state) => ({
  errors: errorsSelectors.getUnseenErrors(state),
})

const mapDispatchToProps = (dispatch) => ({
  setAsSeen: (err) => dispatch(errorsActions.setAsSeen(err)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ErrorContainer)
