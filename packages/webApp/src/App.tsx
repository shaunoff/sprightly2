import React, { memo } from 'react'
import Login from './auth/Login'
import { useAuth } from './auth'
import Date from './components/Date'

const App: React.FC = () => {
  const { logout, isAuthenticated, user } = useAuth()

  if (!isAuthenticated) return <Login />
  // const { loading, data } = useQuery<GetTodayQuery>(GET_TODAY)
  // console.log('loading', loading)
  //if (loading || !data) return <h1>loading</h1>
  return (
    <div>
      Hello {user?.profile?.firstName}
      <Date />
      <button onClick={logout}>logout</button>
    </div>
  )
}

export default memo(App)
