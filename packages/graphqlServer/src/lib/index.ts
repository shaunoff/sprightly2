import jwt from 'jsonwebtoken'
import { User, exclude, Resolver } from '@sprightly/types'
import { RootContext } from '../modules/context'
import { GraphQLResolveInfo } from 'graphql'
import { AuthenticationError } from 'apollo-server'
import { PrismaClient } from '@prisma/client'
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
      expiresIn: 1800,
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
      expiresIn: 2000000,
    },
  )

export const decodeToken = (token: string): string | undefined => {
  try {
    const decoded = jwt.verify(token, secret)
    if (!decoded || typeof decoded === 'string') return
    const { id }: { id?: string } = { ...decoded }
    return id
  } catch (e) {
    return
  }
}

export const userFromToken = async (accessToken: string | undefined, prisma: PrismaClient): Promise<User | null> => {
  try {
    if (!accessToken) return null
    const id = decodeToken(accessToken)

    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    })
    return user
  } catch (e) {
    return null
  }
}

export const authenticated = <T extends (root: any, args: any, context: RootContext, info: GraphQLResolveInfo) => any>(
  next: T,
): T => <T>((root, args, context, info) => {
    if (!context.user) {
      throw new AuthenticationError('Not Authenticated')
    }
    return next(root, args, context, info)
  })
