import React from 'react'
import ReactDOM from 'react-dom'
import './assets/styles'
import App from './App'
import registerServiceWorker from './utils/registerServiceWorker'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
