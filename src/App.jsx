import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import DocumentTitle from 'react-document-title'

import LandingPage from './views/LandingPage'
import Send from './views/Send'
import About from './views/About'
import Header from './components/Header'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <DocumentTitle title="airlivery">
        <Router>
          <div className="app">
            <Header />
            <div className="page-container">
              <Route path="/" exact component={LandingPage} />
              <Route path="/senden" component={Send} />
              <Route path="/about" component={About} />
            </div>
            <Footer />
          </div>
        </Router>
      </DocumentTitle>
    )
  }
}

export default App
