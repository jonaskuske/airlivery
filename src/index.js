import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import App from './App'
import registerServiceWorker from './utils/registerServiceWorker'
import './assets/styles'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import { layoutActions } from './state/layout'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#a4e1ff',
      main: '#6eaffb',
      dark: '#3280c8',
      contrastText: '#fff',
    },
    secondary: {
      light: '#6eff88',
      main: '#00ff55',
      dark: '#00ca1b',
      contrastText: '#000',
    },
  },
})

const mediaQuery = window.matchMedia('(max-width: 900px)')
const queryHandler = query => {
  const isMobile = query.matches
  store.dispatch(layoutActions.setMobileLayout(isMobile))
}
mediaQuery.addListener(queryHandler)
queryHandler(mediaQuery)

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root'),
)

registerServiceWorker()
