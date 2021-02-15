import React from 'react'
import { render } from 'react-dom'
import App from './App'
import AuthorizedApolloProvider from './config/AuthorizedApolloProvider'
import { AuthProvider } from './auth'

render(
  <div>
    <AuthProvider>
      <AuthorizedApolloProvider>
        <App />
      </AuthorizedApolloProvider>
    </AuthProvider>
  </div>,
  document.getElementById('root'),
)
