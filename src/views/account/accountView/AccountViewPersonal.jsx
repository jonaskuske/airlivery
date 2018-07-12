import React from 'react'
import styled from 'styled-components'

import UserImage from '../../../components/UserImage'

export default ({ user }) => {
  return (
    <div>
      <UserImage image={user.profilePicture} />
      <div />
    </div>
  )
}
