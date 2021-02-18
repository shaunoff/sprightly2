import { ApolloServer } from 'apollo-server'
import { User } from '@sprightly/types'
import { ExpressContext, RootContext } from './modules/context'
import { resolvers, typeDefs } from './modules'
import { userFromToken } from './lib'

//Prisma Imports
import { PrismaClient } from '@prisma/client'
export const prisma = new PrismaClient()

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async (expressContext: ExpressContext): Promise<RootContext> => {
    const accessToken = expressContext.req?.headers?.authorization
    const user = await userFromToken(accessToken, prisma)
    return { ...expressContext, prisma, accessToken, user }
  },
  cors: {
    origin: '*',
    credentials: true,
  },
})

server.listen(4000).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
})
