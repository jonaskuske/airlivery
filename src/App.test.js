import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import store from './store'
import { ThemeProvider } from '@mui/material'
import { theme } from './assets/styles/theme'

it('renders without crashing', () => {
  const div = document.createElement('div')

  ReactDOM.render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>,
    div,
  )

  ReactDOM.unmountComponentAtNode(div)
})
