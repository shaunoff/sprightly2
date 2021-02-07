import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { Calendar } from '@sprightly/types'

const TEST_QUERY = gql`
  query testQuery {
    dates {
      day
      month
    }
  }
`

const App: React.FC = () => {
  const { loading, data } = useQuery(TEST_QUERY)
  if (loading || !data) return null
  return (
    <div>
      {data.dates.map((date: Calendar) => (
        <div key={date.day}>{date.day}</div>
      ))}
    </div>
  )
}

export default App
