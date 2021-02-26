import { ApolloClient, createHttpLink, InMemoryCache, NormalizedCacheObject } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

export const accessTokenRef: { current: string | null } = { current: null }

export const apolloClient = (): ApolloClient<NormalizedCacheObject> => {
  const uri = process.env.NODE_ENV !== 'production' ? 'http://localhost:4000' : 'https://api.shaun-hutch.com/'

  const httpLink = createHttpLink({ uri })

  const authLink = setContext(async () => {
    return {
      headers: {
        Authorization: accessTokenRef.current,
      },
    }
  })

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
    connectToDevTools: true,
  })

  return client
}
