import React from 'react'
import styled from 'styled-components'

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
  align-items: flex-end;
  justify-content: space-between;
`
const ImprintContainer = styled.div`
  > p {
    margin: 0.2rem 0;
  }
`
const SocialContainer = styled.div`
  display: flex;
  align-self: flex-start;
  > p {
    margin: 0 0.5rem;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: grey;
    color: #fff;
    font-size: 1.2rem;
    font-weight: 600;
  }
`
export default () => (
  <FooterContainer>
    <Footer className="max-width">
      <ImprintContainer>
        <p>Geschäftskunden</p>
        <p>Kontakt</p>
        <p>FAQ</p>
        <p>Sicherheitshinweise</p>
        <p>AGB</p>
        <p>Datenschutz</p>
        <p>Impressum</p>
      </ImprintContainer>
      <SocialContainer>
        <p style={{ background: '#4C00FF' }}>f</p>
        <p style={{ background: '#FF0000' }}>G+</p>
        <p style={{ background: '#649AEB' }}>🕊</p>
      </SocialContainer>
    </Footer>
  </FooterContainer>
)
