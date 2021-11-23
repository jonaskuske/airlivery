import React from 'react'
import styled from 'styled-components'
import { Fab } from '@mui/material'

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

export default React.forwardRef(function MicroFloatingActionButton(props, ref) {
  return <StyledButton {...props} ref={ref} />
})
