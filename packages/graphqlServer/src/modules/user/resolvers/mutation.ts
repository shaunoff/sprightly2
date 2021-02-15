import { MutationResolvers } from '@sprightly/types'
import { RootContext } from '../../../modules/context'
import { createToken } from '../../../lib'
import { AuthenticationError } from 'apollo-server'
import bcrypt from 'bcrypt'

export const Mutation: MutationResolvers = {
  signIn: async (_, { data }, { prisma }: RootContext) => {
    const { email, password } = data

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

    const passwordMatch = await bcrypt.compare(password, user.password)

    if (!passwordMatch) {
      throw new Error('Invalid Password')
    }

    const token = createToken(user)

    return {
      user: user,
      token: token,
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

    const token = createToken(user)

    return {
      token,
      user,
    }
  },
}
