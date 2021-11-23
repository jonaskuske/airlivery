import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store, { persistor } from './store'
import App from './App'
import './assets/styles'
import registerServiceWorker from './utils/registerServiceWorker'
import './assets/styles'
import {
  createTheme,
  ThemeProvider,
  StyledEngineProvider,
} from '@mui/material/styles'
import { grey } from '@mui/material/colors'
import { layoutActions } from './state/layout'
import { PersistGate } from 'redux-persist/integration/react'

const theme = createTheme({
  palette: {
    grey: { main: grey[300] },
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
const queryHandler = (query) => {
  const isMobile = query.matches
  store.dispatch(layoutActions.setMobileLayout(isMobile))
}
mediaQuery.addListener(queryHandler)
queryHandler(mediaQuery)

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </StyledEngineProvider>
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
)

registerServiceWorker()
