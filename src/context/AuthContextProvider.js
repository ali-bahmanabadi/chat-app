import React, { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'

import { auth } from '../firebase/firebase'

export const AuthContext = React.createContext()

const AuthContextProvider = ({children}) => {
  const [loading, setloading] = useState(true)
  const [user, setUser] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user)
      console.log(user);
      setloading(false)
      if (user) navigate('/chats')
    })
  }, [user, navigate])

  return (
    <AuthContext.Provider value={user}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
