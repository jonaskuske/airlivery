import React from 'react'
import heroImage from '../assets/images/drone-hero.jpg'
import HeroImage from '../components/HeroImage'
import MainButtons from './startPage/MainButtonContainer'
import DeliveryDisplay from '../components/DeliveryDisplay'
import { connect } from 'react-redux'
import { userSelectors } from '../state/user'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import withTheme from '@mui/styles/withTheme'
import { deliveriesSelectors } from '../state/deliveries'

const Subtitle = styled.h3`
  margin-bottom: 0.6rem;
`
const StyledLink = withTheme(styled(Link)`
  font-weight: 600;
  color: ${({ theme }) => theme.palette.primary.main};
  + * {
    margin-top: 1rem;
  }
`)

const StartPage = ({ user, deliveries }) => (
  <div>
    <HeroImage
      image={heroImage}
      title={`Willkommen ${user.name.split(' ')[0]}`}
      subtitle="Einfach abheben."
      smallSubtitle={true}
    />
    <main className="max-width">
      <MainButtons />
      <Subtitle>Letzte Lieferungen</Subtitle>
      <StyledLink to="/lieferungen">Alle anzeigen</StyledLink>
      <DeliveryDisplay deliveries={deliveries} limit={3} />
    </main>
  </div>
)

const { getDeliveriesFromUser, getDeliveriesToUser, getAllDeliveries } =
  deliveriesSelectors
const { getUser } = userSelectors

const mapStateToProps = (state) => ({
  user: getUser(state),
  deliveries: {
    all: getAllDeliveries(state),
    from: getDeliveriesFromUser(state),
    to: getDeliveriesToUser(state),
  },
})

export default connect(mapStateToProps)(StartPage)
