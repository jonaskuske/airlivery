import React from 'react'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import LoginState from './header/LoginState'
import { Search } from '@material-ui/icons'
import { IconButton, withTheme } from '@material-ui/core'
import { Drone } from './icons'

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
  height: 60px;
`
const Logo = styled(Drone)`
  width: 3rem !important;
  height: auto !important;
`
const HeaderPartial = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  > * {
    margin: 0 1rem;
  }
  > *:first-child {
    margin-left: 0;
  }
  > *:last-child {
    margin-right: 0;
  }
`

const HeaderLink = withTheme()(styled(Link)`
  ${({ theme }) => css`
    color: ${theme.palette.primary.main};
  `};
`)
const HeaderLinkLogo = styled(HeaderLink)`
  display: flex;
  align-items: center;
  > svg {
    width: 3rem;
    height: auto;
  }
`
export default () => (
  <HeaderContainer>
    <Header className="max-width">
      <HeaderPartial>
        <HeaderLinkLogo to="/">
          <Logo />
          <span>airlivery</span>
        </HeaderLinkLogo>
        <HeaderLink to="/senden">Senden</HeaderLink>
        <HeaderLink to="/about">About</HeaderLink>
      </HeaderPartial>

      <HeaderPartial style={{ justifyContent: 'flex-end' }}>
        <LoginState />
        <Link to="/hilfe">Hilfe</Link>
        <IconButton component={Link} to="/suche">
          <Search />
        </IconButton>
      </HeaderPartial>
    </Header>
  </HeaderContainer>
)
