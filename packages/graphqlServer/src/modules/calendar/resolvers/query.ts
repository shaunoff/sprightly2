import { QueryResolvers } from '@sprightly/types'
import { RootContext } from '../../../modules/context'
import { authenticated } from '../../../lib'

export const Query: QueryResolvers = {
  dates: async (_, __, { prisma }: RootContext) => {
    const dates = await prisma.calendar.findMany()
    return dates
  },
  date: async (_, __, { prisma }: RootContext) => {
    const date = await prisma.calendar.findFirst({
      where: {
        day_id: new Date().toISOString().substring(0, 10),
      },
    })
    return date
  },
  journals: async (_, __, { prisma, user }: RootContext) => {
    const journals = await prisma.journal.findMany({
      where: {
        event: {
          userId: user?.id,
        },
      },
      include: {
        event: true,
      },
    })
    return journals
  },
}
