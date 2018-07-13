import React from 'react'
import heroImage from '../assets/images/drone-hero.jpg'
import HeroImage from '../components/HeroImage'

import MainButtons from './startPage/MainButtonContainer'
import DeliveryDisplay from '../components/DeliveryDisplay'

export default () => (
  <div>
    <HeroImage
      image={heroImage}
      title="Willkommen Jonas"
      subtitle="Was wollen Sie tun?"
      smallSubtitle={true}
    />
    <main className="max-width">
      <MainButtons />
      <DeliveryDisplay />
    </main>
  </div>
)
