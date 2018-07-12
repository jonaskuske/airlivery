import React from 'react'
import { Button } from '@material-ui/core'
import { AccountCircle, Payment } from '@material-ui/icons'
import styled from 'styled-components'

const StyledViewEditSwitcher = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  > button {
    width: 47%;
  }
`

const PersonalPaymentSwitcher = ({ history }) => {
  const {
    location: { pathname, search },
  } = history
  return (
    <StyledViewEditSwitcher>
      <Button
        variant="contained"
        size="small"
        color={pathname.includes('/account/zahlung') ? 'default' : 'primary'}
        onClick={() => history.push('/account' + search)}
      >
        Persönlich <AccountCircle />
      </Button>
      <Button
        variant="contained"
        size="small"
        color={pathname.includes('/account/zahlung') ? 'primary' : 'default'}
        onClick={() => history.push('/account/zahlung' + search)}
      >
        Zahlung <Payment />
      </Button>
    </StyledViewEditSwitcher>
  )
}

export default PersonalPaymentSwitcher
