import { SchemaDirectiveVisitor } from 'apollo-server'
import { defaultFieldResolver, GraphQLString } from 'graphql'
import { RootContext } from '../modules/context'
import { GraphQLResolveInfo } from 'graphql'
import { AuthenticationError } from 'apollo-server'

export class AuthenticationDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition(field: any, type: any) {
    const { resolve = defaultFieldResolver } = field
    field.resolve = async function (root: unknown, args: unknown, context: RootContext, info: GraphQLResolveInfo) {
      if (!context.user) {
        throw new AuthenticationError('Not Authenticated')
      }
      return resolve.call(this, root, args, context, info)
    }
  }
}

export class AuthorizedDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition(field: any, type: any) {
    const { resolve = defaultFieldResolver } = field
    const { role } = this.args
    field.resolve = async function (root: unknown, args: unknown, context: RootContext, info: GraphQLResolveInfo) {
      if (!context.user || context.user.role !== role) {
        throw new AuthenticationError('Unsufficient Privileges')
      }
      return resolve.call(this, root, args, context, info)
    }
  }
}
