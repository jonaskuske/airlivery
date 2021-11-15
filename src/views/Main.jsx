import React from 'react'
import LandingPage from './LandingPage'
import StartPage from './StartPage'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
})

const Main = ({ isAuth }) => (isAuth ? <StartPage /> : <LandingPage />)

export default connect(mapStateToProps)(Main)
