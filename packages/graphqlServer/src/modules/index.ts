import user from './user'
import calendar from './calendar'
import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge'
import { DateTimeResolver, DateTimeTypeDefinition } from 'graphql-scalars'

export const resolvers = mergeResolvers([...user.resolvers, ...calendar.resolvers, { DateTime: DateTimeResolver }])

export const typeDefs = mergeTypeDefs([...user.typeDefs, ...calendar.typeDefs, DateTimeTypeDefinition])

// This is your application, it contains your GraphQL schema and the implementation of it.
// export const application = createApplication({
//   modules: [UserModule]
// })

// This is your actual GraphQL schema
// export const mySchema = application.schema
