import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { GetTodayQuery } from '@sprightly/types'

const GET_TODAY = gql`
  query getToday {
    date {
      day
      month
      week_of_year
    }
  }
`

const App: React.FC = () => {
  const { loading, data } = useQuery<GetTodayQuery>(GET_TODAY)
  if (loading || !data) return <div>loading</div>
  return <div>{data.date?.week_of_year}</div>
}

export default App
