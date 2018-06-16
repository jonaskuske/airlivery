import React from 'react'
import heroImage from '../assets/images/drone-hero.jpg'
import HeroImage from '../components/HeroImage'

export default () => (
  <div>
    <HeroImage image={heroImage} title="Delivery." subtitle="Made simple." />
    <main className="max-width">
      <h1>airlivery - Paketzustellung per Drohne</h1>
      <h2>Nie mehr den Paketboten verpassen.</h2>
      {/* <br /> */}
      <p style={{ maxWidth: '30rem' }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ut,
        inventore, repellendus nesciunt molestiae non eaque voluptate delectus
        minima laborum, iste accusantium vitae! Voluptatem asperiores pariatur
        magnam est dolor animi.
      </p>
      <p style={{ maxWidth: '30rem' }}>
        Repudiandae quos nam voluptates! Voluptatibus, provident? Earum eius
        dolor doloribus sapiente non iure porro sit, tempore nam maiores alias
        ratione, aperiam mollitia possimus magni veritatis cupiditate accusamus
        eum magnam! Rerum.
      </p>
    </main>
  </div>
)
