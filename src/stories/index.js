import React from 'react'

import '../assets/styles'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import MainButton from '../views/startPage/MainButton'
import IconTrack from '../assets/icons/track2.svg'

storiesOf('MainButton', module)
  .addDecorator((story) => (
    <div style={{ maxWidth: 250, margin: 15 }}>{story()}</div>
  ))
  .add('without props', () => <MainButton />)
  .add('with props', () => (
    <MainButton
      text="Paket verfolgen"
      image={IconTrack}
      imageSize="66%"
      onClick={action('clicked!')}
    />
  ))
