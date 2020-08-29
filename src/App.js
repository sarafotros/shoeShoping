import React from 'react'
import { CssBaseline } from '@material-ui/core'
import ThemeProvider from './components/ThemeProvider'
import MasterLayout from './screens/MasterLayout'
import LoginContextProvider from './contexts/LoginContext'

function App() {
  return (
    <ThemeProvider>
      <CssBaseline />
      <LoginContextProvider>
        <MasterLayout />
      </LoginContextProvider>
    </ThemeProvider>
  )
}

export default App
