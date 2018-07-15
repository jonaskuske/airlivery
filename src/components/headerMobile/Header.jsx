import React from 'react'
import { Link, withRouter } from 'react-router-dom'
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
  ${props => css`
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

class HeaderMobile extends React.Component {
  state = {
    anchorEl: null,
  }

  handleClose = () => this.setState({ anchorEl: null })
  handleClick = evt => this.setState({ anchorEl: evt.currentTarget })

  render() {
    const { isFixed, hide, transition, isAuth, history } = this.props
    const { anchorEl } = this.state

    return (
      <HeaderContainer isFixed={isFixed} hide={hide} transition={transition}>
        <Header className="max-width">
          <HeaderPartial onClick={() => history.push('/')}>
            <Logo src={logo} />
            airlivery
          </HeaderPartial>
          <HeaderPartial>
            <IconButton component={Link} to="/suche">
              <Search />
            </IconButton>
            <IconButton onClick={this.handleClick}>
              <MoreVert />
            </IconButton>
            <Menu
              open={!!anchorEl}
              anchorEl={anchorEl}
              onClose={this.handleClose}
              onClick={this.handleClose}
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
                    this.handleClose()
                    auth.logout()
                    history.push({
                      pathname: '/einloggen',
                      state: { from: history.location },
                    })
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
}

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps)(withRouter(HeaderMobile))
