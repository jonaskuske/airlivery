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
          <HeaderPartial>
            <Logo src={logo} />
            airlivery
          </HeaderPartial>
          <HeaderPartial>
            <IconButton onClick={() => history.push('/suche')}>
              <Search />
            </IconButton>
            <IconButton onClick={this.handleClick}>
              <MoreVert />
            </IconButton>
            <Menu
              open={!!anchorEl}
              anchorEl={anchorEl}
              onClose={this.handleClose}
            >
              <MenuItem>
                <Link to="/hilfe">Hilfe</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/einstellungen">Einstellungen</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/rechtliches" onClick={this.handleClose}>
                  Rechtliches
                </Link>
              </MenuItem>
              {isAuth ? (
                <MenuItem
                  onClick={() => {
                    this.handleClose()
                    auth.logout()
                  }}
                >
                  Ausloggen
                </MenuItem>
              ) : (
                <MenuItem>
                  <Link to="/einloggen" onClick={this.handleClose}>
                    Einloggen
                  </Link>
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
