import React from 'react'

import style from './Navbar.module.css'

const Navbar = ({logoutHandler}) => {
  return (
    <div className={style.container}>
      <div className={style.name}>
        Chatroom
      </div>
      <div className={style.logout} onClick={logoutHandler}>
        LogOut
      </div>
    </div>
  )
}

export default Navbar
