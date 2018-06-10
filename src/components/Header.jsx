import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../assets/icons/drone.svg'
import search from '../assets/icons/search.svg'

const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  background: #fff;
  display: flex;
  justify-content: center;
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.3);
`
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
`
const Logo = styled.img`
  width: 3rem;
`
const HeaderPartial = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  > * {
    margin: 0 1rem;
  }
`
export default () => (
  <HeaderContainer>
    <Header className="max-width">
      <HeaderPartial>
        <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
          <Logo src={logo} alt="Logo, drone carrying parcel" />airlivery
        </Link>
        <Link to="/senden">Senden</Link>
        <Link to="/empfangen">Empfangen</Link>
        <Link to="/about">About</Link>
      </HeaderPartial>
      <HeaderPartial style={{ justifyContent: 'flex-end' }}>
        <a href="/#">Login/Registrieren</a>
        <a href="/#">Hilfe</a>
        <a href="/#">
          <Logo src={search} alt="Suche" style={{ width: '1.5rem' }} />
        </a>
      </HeaderPartial>
    </Header>
  </HeaderContainer>
)
