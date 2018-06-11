import React from 'react'
import styled from 'styled-components'
import { SocialIcon } from './'

const FooterContainer = styled.div`
  background: #f0f0f0;
  width: 100%;
  margin-top: auto;
  border-top: 2px solid lightgray;
  padding: 2rem 0 1rem 0;
`
const Footer = styled.footer`
  min-height: 5rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap-reverse;
`
const ImprintContainer = styled.div`
  padding-right: 5rem;
  display: flex;
  flex-direction: column;
  > a {
    margin: 0.2rem 0;
  }
`
const SocialContainer = styled.div`
  display: flex;
  margin-bottom: 2rem;
  > *:first-child {
    margin-left: 0;
  }
  > *:last-child {
    margin-right: 0;
  }
`

const imprintItems = [
  'Geschäftskunden',
  'Kontakt',
  'FAQ',
  'Sicherheitshinweise',
  'AGB',
  'Datenschutz',
  'Impressum',
]

export default () => (
  <FooterContainer>
    <Footer className="max-width">
      <ImprintContainer>
        {imprintItems.map(item => (
          <a href="/#" key={item}>
            {item}
          </a>
        ))}
      </ImprintContainer>
      <SocialContainer>
        <SocialIcon color="#4C00FF">f</SocialIcon>
        <SocialIcon color="#FF0000">G+</SocialIcon>
        <SocialIcon color="#649AEB">🕊</SocialIcon>
      </SocialContainer>
    </Footer>
  </FooterContainer>
)
