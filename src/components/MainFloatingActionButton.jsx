import React from 'react'
import styled from 'styled-components'
import { Fab } from '@mui/material'

const StyledButton = styled(Fab)`
  && {
    position: fixed;
    right: 23px;
    bottom: 79px;
    z-index: 2;
  }
`

export default React.forwardRef(function MainFloatingActionButton(props, ref) {
  return <StyledButton color="primary" {...props} ref={ref} />
})
