import React from 'react'
import styled from 'styled-components'
import { Fab } from '@material-ui/core'

const StyledButton = styled(Fab)`
  && {
    position: fixed;
    right: 23px;
    bottom: 79px;
    z-index: 2;
  }
`

export default function MainFloatingActionButton({ children, ...props }) {
  return (
    <StyledButton color="primary" {...props}>
      {children}
    </StyledButton>
  )
}
