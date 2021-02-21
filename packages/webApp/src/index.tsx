import React from 'react'
import { render } from 'react-dom'
import App from './App'
import { ApolloProvider } from '@apollo/client'
import { AuthProvider } from './auth'
import { apolloClient } from './config/apolloClient'
import { BrowserRouter as Router } from 'react-router-dom'

render(
  <div>
    <ApolloProvider client={apolloClient()}>
      <AuthProvider>
        <Router>
          <App />
        </Router>
      </AuthProvider>
    </ApolloProvider>
  </div>,
  document.getElementById('root'),
)
