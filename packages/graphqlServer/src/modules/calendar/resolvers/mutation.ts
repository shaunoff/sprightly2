import { MutationResolvers } from '@sprightly/types'
import { RootContext } from '../../../modules/context'

export const Mutation: MutationResolvers = {
  createEvent: async (_, __, { prisma }: RootContext) => {
    const event = prisma.event.create({
      data: { userId: 1, Journal: { create: { text: 'gfdjhsgfhfgjhdsgjfh' } } },
      include: {
        Journal: true,
      },
    })
    console.log(event)
    return event
    // const { email, password } = data
    // const user = await prisma.user.findUnique({
    //   where: {
    //     email,
    //   },
    // })
    // if (!user) {
    //   throw new AuthenticationError('No user found')
    // }
    // const passwordMatch = await bcrypt.compare(password, user.password)
    // if (!passwordMatch) {
    //   throw new Error('Invalid Password')
    // }
    // const token = createToken(user)
    // return {
    //   user: user,
    //   token: token,
    // }
  },
}
