import React from 'react'
import heroImage from '../assets/images/drone-hero.jpg'
import HeroImage from '../components/HeroImage'

import MainButtons from './startPage/MainButtonContainer'

export default () => (
  <div>
    <HeroImage
      image={heroImage}
      title="Willkommen Martina"
      subtitle="Was wollen Sie tun?"
      smallSubtitle={true}
    />
    <main className="max-width">
      <MainButtons />
      <h2>Zuletzt versandt/empfangen</h2>
      <p>Hier</p>
      <br />
      <p>Eine</p>
      <br />
      <p>Liste</p>
    </main>
  </div>
)
