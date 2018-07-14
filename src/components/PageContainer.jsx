import React from 'react'
import { Route } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'

import Main from '../views/Main'
import Send from '../views/Send'
import About from '../views/About'
import Account from '../views/Account'
import Imprint from '../views/Imprint'
import Privacy from '../views/Privacy'
import LegalOverview from '../views/LegalOverview'
import Contacts from '../views/Contacts'
import Deliveries from '../views/Deliveries'
import Login from '../views/Login'
import ErrorView from './ErrorViewContainer'

export default () => {
  return (
    <div className="page-container">
      <ErrorView />
      <Route path="/" exact component={Main} />
      <ProtectedRoute path="/senden" component={Send} />
      <Route path="/about" component={About} />
      <ProtectedRoute path="/lieferungen" component={Deliveries} />
      <ProtectedRoute path="/account" component={Account} />
      <Route path="/einloggen" component={Login} />
      <ProtectedRoute path="/adressbuch" component={Contacts} />
      <Route path="/impressum" component={Imprint} />
      <Route path="/datenschutz" component={Privacy} />
      <Route path="/rechtliches" component={LegalOverview} />
    </div>
  )
}
