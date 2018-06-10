import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.div`
  background: #f0f0f0;
  width: 100%;
  margin-top: auto;
  border-top: 2px solid lightgray;
`
const Footer = styled.footer`
  min-height: 5rem;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`

export default () => (
  <FooterContainer>
    <Footer className="max-width">
      <p style={{ marginRight: '1rem' }}>Impressum</p>
      <p>Datenschutz</p>
    </Footer>
  </FooterContainer>
)
