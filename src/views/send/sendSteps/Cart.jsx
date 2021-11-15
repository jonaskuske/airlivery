import React from 'react'
import styled from 'styled-components'
import { Button } from '@material-ui/core'
import Contact from '../../../components/Contact'
import PaymentMethod from '../../../components/PaymentMethod'
import Airspot from '../../../components/Airspot'
import PackageSize from '../../../components/PackageSize'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`
const Sum = styled.p`
  font-size: 130%;
`
export default function Cart({ selection, onDone }) {
  const { contact, packageSize, airspot, paymentMethod } = selection
  const { price } = packageSize
  const [euro, cents = ''] = price.toString().split('.')

  return (
    <Container>
      <h2>Angaben prüfen</h2>
      <p>
        Überprüfe noch einmal deine Auswahl.
        <br />
        Alles korrekt? Dann schließe den Vorgang zahlungspflichtig ab.
      </p>
      <p>
        <b>Gewählte Paketgröße:</b>
      </p>
      <PackageSize packageSize={packageSize} square={false} />
      <p>
        <b>Ziel:</b>
      </p>
      <Contact contact={contact} />
      <p>
        <b>Zahlungsmethode:</b>
      </p>
      <PaymentMethod method={paymentMethod} />
      <p>
        <b>Airspot:</b>
      </p>
      <Airspot airspot={airspot} />
      <br />
      <h2>Gesamtsumme</h2>
      <Sum>
        <b>{`${euro},${cents.padEnd(2, '0')}€`}</b>
      </Sum>
      <Button
        variant="contained"
        color="primary"
        onClick={onDone}
        id="cart-confirm"
      >
        Kostenpflichtig abschließen
      </Button>
      <br />
      <br />
    </Container>
  )
}
