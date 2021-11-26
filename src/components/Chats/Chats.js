import React, { useState, useEffect, useContext } from 'react'
import { auth } from '../../firebase/firebase'
import { useNavigate } from 'react-router'
import { ChatEngine } from 'react-chat-engine'
import axios from 'axios'

//component
import Navbar from '../Navbar/Navbar'

//style
import style from './Chats.module.css'

//context
import { AuthContext } from '../../context/AuthContextProvider'

const Chats = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const user = useContext(AuthContext)

  useEffect(() => {
    if (!user) {
      navigate('/')
      return
    }

    axios
      .get('https://api.chatengine.io/user/me', {
        headers: {
          'project-id': '338bf508-111e-4c66-916a-65959891e3cf',
          'user-name': user.email,
          'user-secret': user.uid,
        },
      })
      .then(() => {
        setLoading(false)
      })
      .catch(() => {
        let formdata = new FormData()
        formdata.append('email', user.email)
        formdata.append('username', user.email)
        formdata.append('secret', user.uid)
        getFile(user.photoURL).then((avatar) => {
          formdata.append('avatar', avatar, avatar.name)
          axios
            .post('https://api.chatengine.io/user/', formdata, {
              headers: {
                'private-key': '7bab2d7f-0a6f-486e-bb4a-c0b970dd0462',
              },
            })
            .then(() => setLoading(false))
            .catch((error) => console.log(error))
        })
      })
  }, [user, navigate])

  const getFile = async (url) => {
    const response = await fetch(url)
    const data = await response.blob()
    return new File([data], 'userPhoto.jpg', { type: 'image/jpeg' })
  }

  const logoutHandler = async () => {
    await auth.signOut()
    navigate('/')
  }

  if (!user || loading) return 'Loading...'

  return (
    <div className={style.container}>
      <Navbar logoutHandler={logoutHandler} />
      <ChatEngine
        height="calc(100vh - 50px)"
        projectId="338bf508-111e-4c66-916a-65959891e3cf"
        userName={user.email}
        userSecret={user.uid}
      />
    </div>
  )
}

export default Chats
