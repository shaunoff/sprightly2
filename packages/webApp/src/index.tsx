import React from 'react'
import { render } from 'react-dom'
import App from './App'
import { ApolloProvider } from '@apollo/client'
import { AuthProvider } from './auth'
import { apolloClient } from './config/apolloClient'

render(
  <div>
    <ApolloProvider client={apolloClient()}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ApolloProvider>
  </div>,
  document.getElementById('root'),
)
