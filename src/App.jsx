import React, { Component } from 'react'
import styled from 'styled-components'

import { Title } from './components/styled'
import logo from './assets/images/logo.svg'

const Header = styled.header`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`
const Logo = styled.img`
  animation: spin infinite 20s linear;
  height: 80px;
`

class App extends Component {
  render() {
    return (
      <div className="center-text">
        <Header>
          <Logo src={logo} alt="logo" />
          <Title>Welcome to React!</Title>
        </Header>
        <p className="font-large">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

export default App
