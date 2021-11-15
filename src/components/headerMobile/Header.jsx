import React, { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import styled, { css } from 'styled-components'
import logo from '../../assets/icons/drone.svg'
import { MoreVert, Search } from '@material-ui/icons'
import { IconButton, Menu, MenuItem } from '@material-ui/core'
import { connect } from 'react-redux'
import auth from '../../utils/auth'

const HeaderContainer = styled.div`
  top: 0;
  width: 100%;
  z-index: 100;
  background: #fff;
  display: flex;
  justify-content: center;
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.3);
  ${(props) => css`
    position: ${props.isFixed ? 'fixed' : 'absolute'};
    transition: ${props.transition && 'transform 180ms 180ms'};
    transform: ${props.hide && 'translateY(-100%)'};
  `};
`
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
`
const HeaderPartial = styled.div`
  display: flex;
  align-items: center;
`
const Logo = styled.img`
  width: 3rem;
`

function HeaderMobile({ isFixed, hide, transition, isAuth }) {
  const [anchorEl, setAnchorEl] = useState(null)
  const navigate = useNavigate()
  const location = useLocation()

  const handleClose = () => setAnchorEl(null)
  const handleClick = (evt) => setAnchorEl(evt.currentTarget)

  return (
    <HeaderContainer isFixed={isFixed} hide={hide} transition={transition}>
      <Header className="max-width">
        <HeaderPartial onClick={() => navigate('/')}>
          <Logo src={logo} />
          airlivery
        </HeaderPartial>
        <HeaderPartial>
          <IconButton component={Link} to="/suche">
            <Search />
          </IconButton>
          <IconButton onClick={handleClick}>
            <MoreVert />
          </IconButton>
          <Menu
            open={!!anchorEl}
            anchorEl={anchorEl}
            onClose={handleClose}
            onClick={handleClose}
          >
            <MenuItem component={Link} to="/hilfe">
              Hilfe
            </MenuItem>
            <MenuItem component={Link} to="/einstellungen">
              Einstellungen
            </MenuItem>
            <MenuItem component={Link} to="/rechtliches">
              Rechtliches
            </MenuItem>
            {isAuth ? (
              <MenuItem
                component="button"
                onClick={() => {
                  handleClose()
                  auth.logout()
                  navigate('/einloggen', { state: { from: location } })
                }}
              >
                Ausloggen
              </MenuItem>
            ) : (
              <MenuItem component={Link} to="/einloggen">
                Einloggen
              </MenuItem>
            )}
          </Menu>
        </HeaderPartial>
      </Header>
    </HeaderContainer>
  )
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps)(HeaderMobile)
