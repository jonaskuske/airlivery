import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import DocumentTitle from 'react-document-title'
import ScrollToTop from './utils/ScrollToTop'
import HeaderNavigation from './components/Header'
import HeaderMobile from './components/HeaderMobile'
import BottomNavigation from './components/BottomNavigation'
import Footer from './components/Footer'
import { CssBaseline } from '@mui/material'
import PageContainer from './components/PageContainer'

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

                <PageContainer />

                {isMobile ? <BottomNavigation /> : <Footer />}
              </React.Fragment>
            </div>
          </ScrollToTop>
        </Router>
      </DocumentTitle>
    )
  }
}

const mapStateToProps = (state) => ({
  isMobile: state.layout.mobile,
})

export default connect(mapStateToProps)(App)
