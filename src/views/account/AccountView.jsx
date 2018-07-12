import React from 'react'
import Links from './accountView/Links'
import AccountViewPersonal from './accountView/AccountViewPersonal'

export default ({ mode, user }) => {
  console.log(mode)
  return (
    <React.Fragment>
      <Links />
      {mode !== 'payment' ? <AccountViewPersonal user={user} /> : <div />}
    </React.Fragment>
  )
}
