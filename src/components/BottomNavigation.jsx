import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core'
import { Home, AccountCircle } from '@material-ui/icons'
import { Send, Drone } from './icons'
import styled from 'styled-components'

const Navigation = styled(BottomNavigation)`
  position: fixed;
  width: 100%;
  z-index: 100;
  bottom: 0;
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.3);
  > a,
  > a:hover {
    text-decoration: none;
  }
`

export default withRouter(
  class BottomNav extends React.Component {
    routes = [
      { icon: Home, href: '/', name: 'Start' },
      { icon: Send, href: '/senden', name: 'Senden' },
      { icon: Drone, href: '/about', name: 'About' },
      { icon: AccountCircle, href: '/account', name: 'Profil' },
    ]

    matchRoutes = pathname => {
      return this.routes.reduce((prev, { href, name }) => {
        if (href === pathname) return name
        else if (href !== '/' && pathname.startsWith(href)) return name
        else return prev
      }, '')
    }

    render() {
      const { pathname } = this.props.history.location
      const value = this.matchRoutes(pathname)

      return (
        <Navigation value={value}>
          {this.routes.map(route => (
            <BottomNavigationAction
              label={route.name}
              value={route.name}
              icon={<route.icon />}
              component={Link}
              to={route.href}
              key={route.name}
            />
          ))}
        </Navigation>
      )
    }
  },
)
