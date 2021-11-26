import { Routes, Route } from 'react-router-dom'
import Chats from './components/Chats/Chats'

import Login from './components/Login/Login'
import AuthContextProvider from './context/AuthContextProvider'

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/chats" element={<Chats />} />
        </Routes>
      </AuthContextProvider>
    </div>
  )
}

export default App
