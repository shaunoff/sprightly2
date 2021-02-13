import React, { useEffect, ReactNode } from 'react'
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

import { useAuth } from '../auth'

interface AuthorizedApolloProviderProps {
  children: ReactNode
}

const AuthorizedApolloProvider: React.FC<AuthorizedApolloProviderProps> = ({
  children,
}: AuthorizedApolloProviderProps): JSX.Element => {
  const { isLoading, isAuthenticated, token, getAccessToken } = useAuth()
  console.log(isLoading, isAuthenticated)
  useEffect(() => {
    getAccessToken()
  }, [])

  if (isLoading) return <div>loading</div>

  const uri = process.env.NODE_ENV !== 'production' ? 'http://localhost:4000' : 'https://api.shaun-hutch.com/'

  const httpLink = createHttpLink({ uri })

  const authLink = setContext(async () => {
    return {
      headers: {
        Authorization: token,
      },
    }
  })

  const apolloClient = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
    connectToDevTools: true,
  })
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
}

export default AuthorizedApolloProvider
