import React from 'react'
import { Route, Routes } from 'react-router-dom'
import RequireAuth from './ProtectedRoute'

import Main from '../views/Main'
import Send from '../views/Send'
import About from '../views/About'
import Account from '../views/Account'
import Imprint from '../views/Imprint'
import Privacy from '../views/Privacy'
import LegalOverview from '../views/LegalOverview'
import Contacts from '../views/Contacts'
import Deliveries from '../views/Deliveries'
import ActiveDelivery from '../views/ActiveDelivery'
import Login from '../views/Login'
import Signup from '../views/Signup'
import Settings from '../views/Settings'
import Help from '../views/Help'
import Search from '../views/Search'
import Track from '../views/Track'
import ErrorView from './ErrorViewContainer'

export default function PageContainer() {
  return (
    <div className="page-container">
      <ErrorView />
      <Routes>
        <Route path="/" exact element={<Main />} />
        <Route path="/einloggen" element={<Login />} />
        <Route path="/registrieren" element={<Signup />} />
        <Route
          path="/senden"
          element={
            <RequireAuth>
              <Send />
            </RequireAuth>
          }
        />
        <Route
          path="/lieferungen"
          element={
            <RequireAuth>
              <Deliveries />
            </RequireAuth>
          }
        />
        <Route
          path="/aktive-sendung"
          element={
            <RequireAuth>
              <ActiveDelivery />
            </RequireAuth>
          }
        />
        <Route
          path="/account"
          element={
            <RequireAuth>
              <Account />
            </RequireAuth>
          }
        />
        <Route path="/adressbuch" element={<Contacts />} />
        <Route path="/einstellungen" element={<Settings />} />
        <Route path="/about" element={<About />} />
        <Route path="/hilfe" element={<Help />} />
        <Route path="/suche" element={<Search />} />
        <Route path="/sendungsverfolgung" element={<Track />} />
        <Route path="/impressum" element={<Imprint />} />
        <Route path="/datenschutz" element={<Privacy />} />
        <Route path="/rechtliches" element={<LegalOverview />} />
      </Routes>
    </div>
  )
}
