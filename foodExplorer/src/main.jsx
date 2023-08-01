import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from 'styled-components'
import theme from './AppStyles/theme.js'
import GlobalStyles from './AppStyles/global.js'
import SignUp from './pages/SignUp'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
        <SignUp />
    </ThemeProvider>
  </React.StrictMode>,
)
