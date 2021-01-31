import user from './user'
import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge'

export const resolvers = mergeResolvers([...user.resolvers])

export const typeDefs = mergeTypeDefs([...user.typeDefs])

// This is your application, it contains your GraphQL schema and the implementation of it.
// export const application = createApplication({
//   modules: [UserModule]
// })

// This is your actual GraphQL schema
// export const mySchema = application.schema
