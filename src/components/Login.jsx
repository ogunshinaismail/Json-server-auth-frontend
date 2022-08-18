import React, { useContext } from 'react'
import { LoginContext } from '../Contexts/LoginContext'

const Login = () => {   
    const {setUsername, setShowProfile } = useContext(LoginContext);

  return (
    <div>
        <main>
            <input 
                type="text"
                placeholder='username'
                onChange={ e => {
                    setUsername(e.target.value)
                }}
            />
            <input type="text" placeholder='password....' />
            <button
                onClick={ () => {
                    setShowProfile(true)
                }}>Submit</button>
        </main>
    </div>
  )
}

export default Login