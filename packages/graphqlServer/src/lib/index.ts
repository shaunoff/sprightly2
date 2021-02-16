import jwt from 'jsonwebtoken'
//import UserModel from '../modules/user/models'
import { User, exclude } from '@sprightly/types'
// import { AuthenticationError } from 'apollo-server'
const secret = 'shaunoffshaunoffshaunoffshaunoffshaunoffshaunoffshaunoffshaunoffshaunoffshaunoffshaunoff'

export const createAccessToken = ({ id, email, profile }: User): string =>
  jwt.sign(
    {
      id,
      email,
      profile: profile && exclude(profile, ['id', 'userId']),
    },
    secret,
    {
      algorithm: 'HS256',
      expiresIn: 1000,
    },
  )

export const validRefreshToken = (token: string): boolean => {
  try {
    jwt.verify(token, secret)
    return true
  } catch (e) {
    return false
  }
}

export const createRefreshToken = (id: string): string =>
  jwt.sign(
    {
      id,
    },
    secret,
    {
      algorithm: 'HS256',
      expiresIn: 2000000000,
    },
  )

export const decodeRefreshToken = (token: string): string | undefined => {
  try {
    const decoded = jwt.verify(token, secret)
    if (!decoded || typeof decoded === 'string') return
    const { id }: { id?: string } = { ...decoded }
    return id
  } catch (e) {
    return
  }
}

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
