import jwt from 'jsonwebtoken'
//import UserModel from '../modules/user/models'
import { User } from '../generated/graphql'
// import { AuthenticationError } from 'apollo-server'
const secret = 'shaunoffshaunoffshaunoffshaunoffshaunoffshaunoffshaunoffshaunoffshaunoffshaunoffshaunoff'

export const createToken = (user: User): string =>
  jwt.sign(
    {
      ...user,
      'https://hasura.io/jwt/claims': { 'x-hasura-default-role': 'admin', 'x-hasura-allowed-roles': ['admin', 'user'] },
    },
    secret,
    {
      algorithm: 'HS256',
      expiresIn: 360000,
    },
  )

// export const userFromToken = async (token = ''): Promise<User | undefined> => {
//   try {
//     if (!token) return
//     // const validToken: any = jwt.verify(token, secret, {
//     //   algorithms: ['HS256']
//     // })

//     //const user = await UserModel.findOne(validToken.id)
//     const user: User = {
//       id: 'fghfjgfjh',
//       password: 'String',
//       email: 'String',
//       firstName: 'String',
//       lastName: 'String'
//     }

//     return user
//   } catch (e) {
//     console.log('Incorrect  Token')
//     return null
//   }
// }

// export const authenticated = (next: any) => (root: any, args: any, context: any, info: any) => {
//   if (!context.user) {
//     throw new AuthenticationError('Not Authenticated')
//   }
//   return next(root, args, context, info)
// }

// export const authorized = (role: any, next: any) => (root: any, args: any, context: any, info: any) => {
//   if (context.user.role !== role) {
//     throw new AuthenticationError(`you must have ${role} role`)
//   }

//   return next(root, args, context, info)
// }

// export const myMiddleware = (role: string) => async ({ root, args, context, info }, next: any) => {
//   console.log('hihihi', role, context)

//   return next()
// }
