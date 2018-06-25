import React from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'

import MainButton from './/MainButton'

import IconTrack from '../../assets/icons/track2.svg'
import IconSend from '../../assets/icons/send2.svg'
import IconReceive from '../../assets/icons/receive2.svg'
import IconAvatar from '../../assets/icons/avatar.svg'

const Container = styled.div`
  margin: 2rem 0;
  display: flex;
  justify-content: space-around;
  > div {
    margin-right: 2.5rem;
  }
  > div:last-of-type {
    margin-right: 0;
  }
  @media screen and (max-width: 900px) {
    > div {
      margin-right: 1rem;
    }
  }
  @media (max-width: 715px) {
    flex-wrap: wrap;
    > div {
      width: 45%;
      flex-grow: 1;
    }
    > *:nth-child(2n) {
      margin-right: 0;
    }
  }
`

export default withRouter(({ history }) => {
  return (
    <Container>
      <MainButton
        image={IconTrack}
        text="Sendung verfolgen"
        onClick={() => history.push('/sendungsverfolgung')}
      />
      <MainButton
        image={IconSend}
        text="Paket versenden"
        onClick={() => history.push('/senden')}
      />
      <MainButton
        image={IconReceive}
        text="Paket empfangen"
        onClick={() => history.push('/empfangen')}
      />
      <MainButton
        image={IconAvatar}
        text="Profil verwalten"
        onClick={() => history.push('/account')}
      />
    </Container>
  )
})
