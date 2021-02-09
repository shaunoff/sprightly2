import { ApolloClient, InMemoryCache } from '@apollo/client'

const uri =
  process.env.NODE_ENV !== 'production'
    ? 'http://localhost:4000'
    : 'http://graphqlserver.eba-i2jkptfc.us-east-1.elasticbeanstalk.com/'

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri,
  connectToDevTools: true,
})

export default client
