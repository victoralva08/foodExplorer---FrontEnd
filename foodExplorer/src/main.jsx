import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from 'styled-components'
import theme from './AppStyles/theme.js'
import GlobalStyles from './AppStyles/global.js'

import { Routes } from './routes/index.jsx'
import { AuthenticatedProvider } from './authHook/context'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
          <AuthenticatedProvider>
              <Routes />
          </AuthenticatedProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
