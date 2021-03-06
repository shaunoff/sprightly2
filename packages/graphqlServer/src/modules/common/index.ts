import { loadFilesSync } from '@graphql-tools/load-files'
import path from 'path'

const resolvers = loadFilesSync(path.join(__dirname, './resolvers'))

const typeDefs = loadFilesSync(path.join(__dirname, './schema'))

export default {
  resolvers,
  typeDefs,
}
