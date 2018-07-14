import React from 'react'
import styled from 'styled-components'

import Panel from './infoPanel/Panel'
import EditInfo from './infoPanel/EditInfo'
import EditActions from './infoPanel/EditActions'
import UserImage from '../../../components/UserImage'

const InformationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  > div {
    flex-basis: 48%;
  }
`
const StyledUserImage = styled(UserImage)`
  && {
    flex-shrink: 1;
    margin-right: 1rem;
    max-width: 17rem;
  }
`
const HiddenPanel = styled(Panel)`
  position: relative;
  align-self: stretch;
  > *:not(.test) {
    visibility: hidden;
  }
`

export default ({ user, edit, actions }) => {
  if (!edit) {
    return (
      <InformationContainer>
        <StyledUserImage image={user.profilePicture} />
        <Panel user={user} />
      </InformationContainer>
    )
  } else
    return (
      <React.Fragment>
        <InformationContainer>
          <StyledUserImage image={user.profilePicture} />
          <HiddenPanel user={user}>
            <EditActions updateUser={actions.updateUser} />
          </HiddenPanel>
        </InformationContainer>
        <EditInfo user={user} updateUser={actions.updateUser} />
      </React.Fragment>
    )
}
