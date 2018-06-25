import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import DocumentTitle from 'react-document-title'
import ScrollToTop from './utils/ScrollToTop'
import Main from './views/Main'
import Send from './views/Send'
import About from './views/About'
import Imprint from './views/Imprint'
import HeaderNavigation from './components/Header'
import HeaderMobile from './components/HeaderMobile'
import BottomNavigation from './components/BottomNavigation'
import Footer from './components/Footer'
import { CssBaseline } from '@material-ui/core'
import Privacy from './views/Privacy'
import LegalOverview from './views/LegalOverview'

class App extends Component {
  render() {
    const { isMobile } = this.props

    return (
      <DocumentTitle title="airlivery">
        <Router>
          <ScrollToTop>
            <div className="app">
              <React.Fragment>
                <CssBaseline />
                {isMobile ? <HeaderMobile /> : <HeaderNavigation />}
                <div className="page-container">
                  <Route path="/" exact component={Main} />
                  <Route path="/senden" component={Send} />
                  <Route path="/about" component={About} />
                  <Route path="/impressum" component={Imprint} />
                  <Route path="/datenschutz" component={Privacy} />
                  <Route path="/rechtliches" component={LegalOverview} />
                </div>
                {isMobile ? <BottomNavigation /> : <Footer />}
              </React.Fragment>
            </div>
          </ScrollToTop>
        </Router>
      </DocumentTitle>
    )
  }
}

const mapStateToProps = state => ({
  isMobile: state.layout.mobile,
})

export default connect(mapStateToProps)(App)
