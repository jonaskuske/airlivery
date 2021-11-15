import React from 'react'
import DotsMobileStepper from '../components/DotsMobileStepper'
import SignupSteps from './signup/SignupSteps'
import Success from './signup/Success'
import { connect } from 'react-redux'
import { authActions, authSelectors } from '../state/auth'
import { Navigate } from 'react-router-dom'

import image from '../assets/images/generic-user.png'

class Signup extends React.Component {
  state = {
    activeStep: 0,
    done: false,
    showFormErrors: false,
    userNameWarning: false,
    value: {
      firstName: '',
      lastName: '',
      street: '',
      streetNumber: '',
      plz: '',
      city: '',
      phone: '',
      email: '',
      profilePicture: '',
      password: '',
      confirmPassword: '',
    },
  }

  onBack = () => this.setState((prev) => ({ activeStep: prev.activeStep - 1 }))
  onNext = () => {
    let formValidated = false
    const { activeStep } = this.state

    switch (activeStep) {
      case 0:
        formValidated = this.checkPersonalData()
        break
      case 1:
        formValidated = this.checkRegulatoryData()
        break
      default:
        break
    }

    if (formValidated)
      this.setState((prev) => ({
        showFormErrors: false,
        activeStep: prev.activeStep + 1,
      }))
    else this.setState({ showFormErrors: true })
  }
  checkPersonalData = () => {
    const { value } = this.state
    if (
      value.firstName &&
      value.lastName &&
      value.street &&
      value.streetNumber &&
      value.plz &&
      value.city
    ) {
      const existsAlready = this.props.knownUsers
        .map((user) => user.name)
        .includes(`${value.firstName} ${value.lastName}`)
      this.setState({ userNameWarning: existsAlready })

      return !existsAlready
    } else return false
  }
  checkRegulatoryData = () => {
    const { value } = this.state
    if (value.email && value.password && value.confirmPassword) {
      return value.password === value.confirmPassword
    } else return false
  }
  handleValueChange = ({ target }) => {
    this.setState((prev) => ({
      value: { ...prev.value, [target.name]: target.value },
    }))
  }
  onConfirm = (e) => {
    e && e.preventDefault()

    const { value } = this.state

    const user = {
      name: `${value.firstName} ${value.lastName}`,
      email: value.email,
      phone: value.phone,
      password: value.password,
      adress: {
        city: value.city,
        plz: value.plz,
        street: value.street,
        streetNumber: value.streetNumber,
      },
      profilePicture: value.profilePicture || image,
    }

    this.props.registerUser(user)
    this.setState({ done: true })
  }
  render() {
    const { activeStep, value, done, showFormErrors, userNameWarning } =
      this.state

    if (this.props.isAuth) return <Navigate replace to="/" />

    return (
      <main className="max-width">
        <h1>Registrieren</h1>
        <form onSubmit={this.onConfirm}>
          <DotsMobileStepper
            activeStep={activeStep}
            steps={3}
            onNext={this.onNext}
            onBack={this.onBack}
          />
          {userNameWarning && (
            <p style={{ color: '#f44336' }}>
              Ein Nutzer mit diesem Namen ist bereits registriert.
            </p>
          )}
          {done ? (
            <Success value={value} />
          ) : (
            <SignupSteps
              activeStep={activeStep}
              handleValueChange={this.handleValueChange}
              value={value}
              showFormErrors={showFormErrors}
            />
          )}
        </form>
      </main>
    )
  }
}

const mapStateToProps = (state) => ({
  isAuth: authSelectors.getAuthState(state),
  knownUsers: authSelectors.getKnownUsers(state),
})
const mapDispatchToProps = (dispatch) => ({
  registerUser: (u) => dispatch(authActions.addKnownUser(u)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Signup)
