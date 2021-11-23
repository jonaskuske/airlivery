import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from '@mui/material'

const StyledErrorButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-bottom: 0.5rem;
`

export default function ErrorButtons(props) {
  const { onClick, error } = props
  return (
    <StyledErrorButtons>
      <Button
        color="inherit"
        component={Link}
        onClick={onClick}
        to={'/hilfe' + (error ? `?q=${error.code}` : '')}
      >
        HILFE
      </Button>
      <Button color="inherit" onClick={onClick}>
        OK
      </Button>
    </StyledErrorButtons>
  )
}
