import React from 'react'
import styled from 'styled-components'
import { withTheme } from '@material-ui/core'

const Button = withTheme()(styled.button`
  background: none;
  border: none;
  color: currentColor;
  font-size: 1rem;
  cursor: pointer;
  :hover {
    text-decoration: underline;
    text-decoration-color: ${({ theme }) => theme.palette.primary.main};
  }
`)

export default ({ onClick, children, ...props }) => (
  <Button onClick={onClick} {...props}>
    {children}
  </Button>
)
