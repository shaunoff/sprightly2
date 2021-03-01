import React, { Suspense } from 'react'
import { render } from 'react-dom'
import App from './App'
import { ThemeProvider } from './ui/theme/ThemeContext'
import { ApolloProvider } from '@apollo/client'
import { AuthProvider } from './auth'
import { apolloClient } from './config/apolloClient'
import { BrowserRouter as Router } from 'react-router-dom'

render(
  <div>
    <ApolloProvider client={apolloClient()}>
      <ThemeProvider>
      <AuthProvider>
        <Router>
          <Suspense fallback={<div>Loading Some Content</div>}>
            <App />
          </Suspense>
        </Router>
      </AuthProvider>

      </ThemeProvider>
    </ApolloProvider>
  </div>,
  document.getElementById('root'),
)
