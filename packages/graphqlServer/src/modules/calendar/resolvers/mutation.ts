import { MutationResolvers, MutationCreateJournalArgs } from '@sprightly/types'
import { RootContext } from '../../../modules/context'
import { AuthenticationError } from 'apollo-server'

export const Mutation: MutationResolvers = {
  createJournal: async (_, { data }: MutationCreateJournalArgs, { prisma, user }: RootContext) => {
    // Make sure a user is present
    if (!user) {
      throw new AuthenticationError('Not Authenticated')
    }
    const { entry, rating } = data

    const userId = user.id
    const event = await prisma.event.create({
      data: {
        userId: userId,
        dateId: new Date().toISOString().substring(0, 10),
        journal: { create: { entry, rating } },
      },
      include: {
        journal: true,
      },
    })
    return event.journal
  },
}
