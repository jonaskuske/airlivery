import React from 'react'
import styled from 'styled-components'

import MainButton from './/MainButton'

import IconTrack from '../../assets/icons/icon-track.svg'
import IconSend from '../../assets/icons/icon-send.svg'
import IconReceive from '../../assets/icons/icon-receive.svg'

const Container = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: space-around;
  > * {
    margin-right: 1rem;
  }
  > *:last-of-type {
    margin-right: 0;
  }
`

const noop = () => {}

export default () => (
  <Container>
    <MainButton image={IconTrack} text="Sendung verfolgen" onClick={noop} />
    <MainButton image={IconSend} text="Paket versenden" onClick={noop} />
    <MainButton image={IconReceive} text="Paket empfangen" onClick={noop} />
  </Container>
)
