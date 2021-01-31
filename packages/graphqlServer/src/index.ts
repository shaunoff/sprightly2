import { ApolloServer } from 'apollo-server'
// import { application } from './modules'
import { ExpressContext, RootContext } from './modules/context'
import { resolvers, typeDefs } from './modules'
// const { createToken, getUserFromToken } = require('./auth')

//Prisma Imports
import { PrismaClient } from '@prisma/client'
export const prisma = new PrismaClient()

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async (expressContext: ExpressContext): Promise<RootContext> => {
    const token = expressContext.req?.headers?.authorization
    // const user = await userFromToken(token)
    return { ...expressContext, prisma, token }
  },
  cors: {
    origin: '*',
    credentials: true,
  },
})

server.listen(4000).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
})
