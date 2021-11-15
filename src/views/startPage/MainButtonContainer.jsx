import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

import MainButton from './/MainButton'

import IconTrack from '../../assets/icons/track2.svg'
import IconSend from '../../assets/icons/send2.svg'
import IconReceive from '../../assets/icons/people.svg'
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

export default function MainButtonContainer() {
  const navigate = useNavigate()

  return (
    <Container>
      <MainButton
        image={IconTrack}
        text="Sendung verfolgen"
        onClick={() => navigate('/sendungsverfolgung')}
      />
      <MainButton
        image={IconSend}
        text="Paket versenden"
        onClick={() => navigate('/senden')}
      />
      <MainButton
        image={IconReceive}
        text="Adressbuch zeigen"
        onClick={() => navigate('/adressbuch')}
      />
      <MainButton
        image={IconAvatar}
        text="Profil verwalten"
        onClick={() => navigate('/account')}
      />
    </Container>
  )
}
