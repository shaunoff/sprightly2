import { ApolloClient, InMemoryCache } from '@apollo/client'

const uri = process.env.NODE_ENV !== 'production' ? 'http://localhost:4000' : 'https://api.shaun-hutch.com/'

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri,
  connectToDevTools: true,
})

export default client
