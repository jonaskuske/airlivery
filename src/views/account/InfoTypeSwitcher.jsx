import React from 'react'
import { Button } from '@mui/material'
import { AccountCircle, Payment } from '@mui/icons-material'
import styled from 'styled-components'

const StyledInfoTypeSwitcher = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  > button {
    width: 48%;
  }
`

const ButtonText = styled.span`
  margin-right: 0.5rem;
`

export default function InfoTypeSwitcher({ onClick, infoType }) {
  return (
    <StyledInfoTypeSwitcher>
      <Button
        variant="contained"
        size="small"
        color={infoType === 'payment' ? 'grey' : 'primary'}
        onClick={onClick}
      >
        <ButtonText>Persönlich</ButtonText>
        <AccountCircle />
      </Button>
      <Button
        variant="contained"
        size="small"
        color={infoType === 'payment' ? 'primary' : 'grey'}
        onClick={onClick}
      >
        <ButtonText>Zahlung</ButtonText>
        <Payment />
      </Button>
    </StyledInfoTypeSwitcher>
  )
}
