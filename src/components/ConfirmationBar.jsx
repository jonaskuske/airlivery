import React from 'react'
import styled, { css } from 'styled-components'
import { withTheme, IconButton } from '@material-ui/core'
import { Check } from '@material-ui/icons'

const HeaderContainer = withTheme()(styled.div`
  top: 0;
  width: 100%;
  z-index: 100;
  background: #fff;
  display: flex;
  justify-content: center;
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.3);
  position: fixed;
  ${({ theme }) =>
    css`
      background: ${theme.palette.primary.dark};
    `};
`)
const Header = withTheme()(styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 60px;
  ${({ theme }) =>
    css`
      color: ${theme.palette.background.default};
    `};
`)

export default ({ onConfirm }) => {
  return (
    <HeaderContainer>
      <Header className="max-width">
        <IconButton color="inherit" onClick={onConfirm}>
          <Check />
        </IconButton>
      </Header>
    </HeaderContainer>
  )
}
