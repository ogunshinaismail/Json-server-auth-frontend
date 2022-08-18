import React, { useState } from 'react'
import Login from './components/Login';
import Profile from './components/Profile';
import { LoginContext } from './Contexts/LoginContext';

const ContextRender = () => {
    const [showProfile, setShowProfile] = useState(false)
    const [username, setUsername] = useState([]);

  return (
    <div>
        <LoginContext.Provider value={{username, setUsername, setShowProfile}}>
            {showProfile ? <Profile /> : <Login />}
        </LoginContext.Provider>
    </div>
  )
}

export default ContextRender