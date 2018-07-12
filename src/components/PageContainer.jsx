import React from 'react'
import { Route } from 'react-router-dom'

import Main from '../views/Main'
import Send from '../views/Send'
import About from '../views/About'
import Account from '../views/Account'
import Imprint from '../views/Imprint'
import Privacy from '../views/Privacy'
import LegalOverview from '../views/LegalOverview'
import ErrorView from './ErrorViewContainer'

export default () => {
  return (
    <div className="page-container">
      <ErrorView />
      <Route path="/" exact component={Main} />
      <Route path="/senden" component={Send} />
      <Route path="/about" component={About} />
      <Route path="/account" component={Account} />
      <Route path="/impressum" component={Imprint} />
      <Route path="/datenschutz" component={Privacy} />
      <Route path="/rechtliches" component={LegalOverview} />
    </div>
  )
}
