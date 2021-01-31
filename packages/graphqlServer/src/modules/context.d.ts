import { ExpressContext as ApolloServerExpressContext } from 'apollo-server-express/dist/ApolloServer'
//import { User } from '@generatedTypes'
import { PrismaClient } from '@prisma/client'

// HACK For some reason TypeScript won't help you find `ExpressContext` when you
// start typing the name, so just re-export it from here.
export type ExpressContext = ApolloServerExpressContext

export type RootContext = ExpressContext & {
  token?: string
  //user?: User
  prisma: PrismaClient
  //createToken: any
}
