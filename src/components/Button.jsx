import React from 'react'
import styled, { css } from 'styled-components'
import { withTheme } from '@material-ui/core'

const Button = withTheme()(styled.button`
  background: none;
  border: none;
  color: currentColor;
  font-size: 1rem;
  cursor: pointer;
  :hover {
    text-decoration: underline;
    ${({ theme }) =>
      css`
        text-decoration-color: ${theme.palette.primary.main};
      `};
  }
`)

export default ({ onClick, children, ...props }) => (
  <Button onClick={onClick} {...props}>
    {children}
  </Button>
)
