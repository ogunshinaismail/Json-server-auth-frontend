import React, { useContext } from 'react'
import { LoginContext } from '../Contexts/LoginContext'

const Profile = () => {
  const {username} = useContext(LoginContext);
  
  return (
    <div>
      <h1>Profile</h1>
      <h1>Username: {username}</h1>
    </div>
  )
}

export default Profile