import React from 'react'
import styled from 'styled-components'
import DotsMobileStepper from '../components/DotsMobileStepper'
import SignupSteps from './signup/SignupSteps'
import { connect } from 'react-redux'
import { authActions, authSelectors } from '../state/auth'
import { Redirect } from 'react-router-dom'

import image from '../assets/images/generic-user.png'

const Main = styled.main``

class Signup extends React.Component {
  state = {
    step: 0,
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

  handleStepChange = step => this.setState({ step })
  handleValueChange = ({ target }) => {
    this.setState(prev => ({
      value: { ...prev.value, [target.name]: target.value },
    }))
  }
  trySignup = e => {
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
      profilePicture: image,
    }

    this.props.registerUser(user)
  }
  render() {
    const { step, value } = this.state

    if (this.props.isAuth) return <Redirect to={{ pathname: '/' }} />

    return (
      <Main className="max-width">
        <h1>Registrieren</h1>
        <form onSubmit={this.trySignup}>
          <DotsMobileStepper
            step={step}
            dots={3}
            onStepChange={this.handleStepChange}
            onDone={this.trySignup}
          />
          <SignupSteps
            step={step}
            handleValueChange={this.handleValueChange}
            value={value}
          />
        </form>
      </Main>
    )
  }
}

const mapStateToProps = state => ({
  isAuth: authSelectors.getAuthState(state),
})
const mapDispatchToProps = dispatch => ({
  registerUser: u => dispatch(authActions.addKnownUser(u)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Signup)
