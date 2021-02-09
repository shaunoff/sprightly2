import React from 'react'
import { render } from 'react-dom'
import App from './App'
import { ApolloProvider } from '@apollo/client'
import client from './config/apollo'

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'),
)
