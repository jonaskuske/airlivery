import React from 'react'
import styled from 'styled-components'
import { Fab } from '@material-ui/core'

const StyledButton = styled(Fab)`
  && {
    width: 28px;
    height: 28px;
    min-height: 0;
  }
  & svg {
    font-size: 17px;
  }
`

export default function MicroFloatingActionButton({ children, ...props }) {
  return <StyledButton {...props}>{children}</StyledButton>
}
