import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import DocumentTitle from 'react-document-title'
import { LandingPage, Send, Receive, About } from './views'
import { Header, Footer } from './components'

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
              <Route path="/empfangen" component={Receive} />
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
