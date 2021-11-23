import React from 'react'
import { TextField, Button } from '@mui/material'
import withTheme from '@mui/styles/withTheme'
import styled from 'styled-components'
import { login } from '../utils/auth'
import { userActions } from '../state/user'
import { connect } from 'react-redux'
import { Navigate, Link, useLocation } from 'react-router-dom'
import { authSelectors } from '../state/auth'

const Main = styled.main`
  display: flex;
  min-height: calc(100vh - 120px);
  flex-flow: row wrap;
  align-items: flex-start;
  > h1,
  > h2,
  > form {
    width: 100%;
  }
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  && {
    > div {
      margin-bottom: 0.5rem;
    }
    & button {
      margin-top: 3rem;
    }
  }
`
const Subtitle = styled.h2`
  margin: 0;
`
const StyledTextfield = styled(TextField)`
  width: 100%;
`
const StyledLink = withTheme(styled(Link)`
  font-weight: 600;
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.palette.primary.main};
`)
class Login extends React.Component {
  state = {
    user: '',
    password: '',
    failedLogin: false,
  }

  setUser = ({ target }) => this.setState({ user: target.value })
  setPassword = ({ target }) => this.setState({ password: target.value })

  tryLogin = (e) => {
    e.preventDefault()

    const { user, password } = this.state
    login({ user, password }).catch(() => this.setState({ failedLogin: true }))
  }

  render() {
    const { isAuth, location } = this.props
    const { user, password, failedLogin } = this.state
    const { from } = location.state || { from: { pathname: '/' } }

    if (isAuth) return <Navigate replace to={from} />

    return (
      <Main className="max-width">
        <h1>Einloggen</h1>
        <Subtitle>Schon registriert?</Subtitle>
        <Form method="post" onSubmit={this.tryLogin}>
          <StyledTextfield
            label="Name oder E-Mail"
            placeholder="Max Mustermann"
            onChange={this.setUser}
            value={user}
            error={failedLogin}
          />
          <StyledTextfield
            label="Passwort"
            placeholder="••••••••"
            type="password"
            onChange={this.setPassword}
            value={password}
            error={failedLogin}
          />
          <Button variant="contained" color="primary" type="submit">
            Einloggen
          </Button>
        </Form>
        <div>
          <Subtitle>Neu hier?</Subtitle>
          <br />
          <StyledLink to="/registrieren">Jetzt registrieren!</StyledLink>
        </div>
      </Main>
    )
  }
}

function LoginWithLocation(props) {
  const location = useLocation()
  return <Login {...props} location={location} />
}

const mapStateToProps = (state) => ({
  isAuth: authSelectors.getAuthState(state),
})
const mapDispatchToProps = (dispatch) => ({
  setUser: (u) => dispatch(userActions.setActiveUser(u)),
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginWithLocation)
