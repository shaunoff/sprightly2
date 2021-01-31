//import { UserProvider } from '../providers'
import { MutationResolvers } from '../../../generated/graphql'
import { createToken } from '../../../lib'
import { AuthenticationError } from 'apollo-server'
//import { ExecutionContext } from 'graphql-modules'
//import { mergeArguments } from '@graphql-tools/merge'
//import { UserModule } from '..'
//import { authenticated } from '../../../lib'
import bcrypt from 'bcrypt'

export const Mutation: MutationResolvers = {
  signIn: async (_, { data }, { prisma }) => {
    const { email, password } = data

    const user = await prisma.user.findUnique({
      where: {
        email,
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

  signUp: async (_, { data }, { prisma }) => {
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

    const user = await prisma.user.create({
      data,
    })

    const token = createToken(user)

    return {
      token,
      user,
    }
  },
}
