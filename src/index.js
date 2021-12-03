import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store, { persistor } from './store'
import App from './App'
import './assets/styles'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import './assets/styles'
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles'
import { layoutActions } from './state/layout'
import { PersistGate } from 'redux-persist/integration/react'
import { theme } from './assets/styles/theme'

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

serviceWorkerRegistration.register({
  onUpdate(registration) {
    if (registration && registration.waiting) {
      let preventDevToolsReloadLoop = false

      navigator.serviceWorker.addEventListener('controllerchange', () => {
        // Ensure refresh is only called once.
        // This works around a bug in "force update on reload".
        if (preventDevToolsReloadLoop) return
        preventDevToolsReloadLoop = true

        window.location.reload()
      })

      registration.waiting.postMessage({ type: 'SKIP_WAITING' })
    }
  },
})
