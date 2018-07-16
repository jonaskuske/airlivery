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
import Signup from '../views/Signup'
import Settings from '../views/Settings'
import Help from '../views/Help'
import Search from '../views/Search'
import Track from '../views/Track'
import ErrorView from './ErrorViewContainer'

export default () => {
  return (
    <div className="page-container">
      <ErrorView />
      <Route path="/" exact component={Main} />
      <Route path="/einloggen" component={Login} />
      <Route path="/registrieren" component={Signup} />
      <ProtectedRoute path="/senden" component={Send} />
      <ProtectedRoute path="/lieferungen" component={Deliveries} />
      <ProtectedRoute path="/account" component={Account} />
      <ProtectedRoute path="/adressbuch" component={Contacts} />
      <Route path="/einstellungen" component={Settings} />
      <Route path="/about" component={About} />
      <Route path="/hilfe" component={Help} />
      <Route path="/suche" component={Search} />
      <Route path="/sendungsverfolgung" component={Track} />
      <Route path="/impressum" component={Imprint} />
      <Route path="/datenschutz" component={Privacy} />
      <Route path="/rechtliches" component={LegalOverview} />
    </div>
  )
}
