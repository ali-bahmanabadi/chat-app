import React from 'react'
import firebase from 'firebase/app'
import { auth } from '../../firebase/firebase'

import google from '../../assets/logo/google.svg'

import style from './Login.module.css'

const Login = () => {
  return (
    <div className={style.loginPage}>
      <div className={style.loginCard}>
        <h2>Welcome To Chat</h2>
        <div
          onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
          className={style.button}
        >
          <img src={google} alt="google" />
          Sign in with google
        </div>
      </div>
    </div>
  )
}

export default Login
