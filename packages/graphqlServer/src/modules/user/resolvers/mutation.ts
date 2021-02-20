import { MutationResolvers, MutationSignInArgs, SignupInput } from '@sprightly/types'
import { RootContext } from '../../../modules/context'
import { validRefreshToken, createAccessToken, createRefreshToken, decodeToken } from '../../../lib'
import { AuthenticationError } from 'apollo-server'
import bcrypt from 'bcrypt'
// use directives instead of this
//import { authenticated } from '../../../lib'

export const Mutation: MutationResolvers = {
  signIn: async (_, { data }: MutationSignInArgs, { prisma }: RootContext, info) => {
    const { email, password } = data

    //Get user from database
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
      include: {
        profile: true,
      },
    })
    if (!user) {
      throw new AuthenticationError('No user found')
    }
    //Check if passwords match
    const passwordMatch = await bcrypt.compare(password, user.password)

    if (!passwordMatch) {
      throw new Error('Invalid Password')
    }

    const accessToken = createAccessToken(user)

    //If refresh token, check if it's expired
    if (user.refreshToken && validRefreshToken(user.refreshToken)) {
      return {
        user,
        accessToken,
        refreshToken: user.refreshToken,
      }
    } else {
      //If refresh token, check if it's expired
      const refreshToken = createRefreshToken(user.id)
      await prisma.user.update({
        where: {
          email,
        },
        data: {
          refreshToken,
        },
      })
      return {
        user: user,
        accessToken,
        refreshToken,
      }
    }
  },

  signUp: async (_, { data }, { prisma }: RootContext) => {
    const existing = await prisma.user.findUnique({
      where: {
        email: data.email,
      },
    })

    if (existing) {
      throw new AuthenticationError('User already exists')
    }

    const password = await bcrypt.hash(data.password, 10)
    data.password = password

    const dbData = {
      ...data,
      profile: {
        create: data.profile,
      },
    }
    const user = await prisma.user.create({
      data: dbData,
      include: {
        profile: true,
      },
    })

    const accessToken = createAccessToken(user)
    const refreshToken = createRefreshToken(user.id)
    return {
      refreshToken,
      accessToken,
      user,
    }
  },

  getAccessToken: async (_, { refreshToken }, { prisma }: RootContext) => {
    const validId = decodeToken(refreshToken)
    if (!validId) throw new AuthenticationError('Token is invalid')
    const user = await prisma.user.findUnique({
      where: {
        id: validId,
      },
      include: {
        profile: true,
      },
    })
    if (!user || !user.refreshToken) throw new AuthenticationError('No user found')
    const accessToken = createAccessToken(user)
    return {
      user,
      accessToken,
      refreshToken: user.refreshToken,
    }
  },
}
