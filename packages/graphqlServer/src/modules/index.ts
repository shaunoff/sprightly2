import user from './user'
import calendar from './calendar'
import common from './common'

import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge'

export const resolvers = mergeResolvers([...common.resolvers, ...user.resolvers, ...calendar.resolvers])

export const typeDefs = mergeTypeDefs([...common.typeDefs, ...user.typeDefs, ...calendar.typeDefs])
