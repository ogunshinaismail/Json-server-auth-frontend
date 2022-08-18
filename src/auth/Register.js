// import axios from 'axios'
import React, { useState } from 'react'
// import '../../node_modules/json-server-auth'

const Register = () => {
    const [email, setEmail] = useState('') 
    const [password, setPassword] = useState('') 
    const [firstname, setFirstname] = useState('') 
    const [surname, setSurname] = useState('') 

    const register = async (e) => {
        e.preventDefault();
    
        const data = {
            firstname,
            surname,
            email,
            password
        };

        // Example POST method implementation:
        async function postData(url, data) {
        // Default options are marked with *
        const response = await fetch(url, {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          mode: 'cors', // no-cors, *cors, same-origin
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          credentials: 'same-origin', // include, *same-origin, omit
          headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          redirect: 'follow', // manual, *follow, error
          referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
          body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        return response.json(); // parses JSON response into native JavaScript objects
  
      }
  
      postData('http://localhost:8000/auth/register', data)
        .then((data) => {
          console.log(data); // JSON data parsed by `data.json()` call
        });
    }

    // const bgColors = ["#3a86ff33", "#8338ec33", "#fb560733", "#54900033"] 
    // const colors = ["#3A86FF", "#8338EC", "#FB5607", "#3A86FF"] 
    // const randomBgColors = bgColors[Math.floor(Math.random() * bgColors.length)]
    // console.log(randomBgColors);

  return (
    <div className='register'>
        <h1>Register</h1>
        <form onSubmit={register}>
            <input 
                type="text" 
                placeholder='first name' 
                onChange={e => setFirstname(e.target.value)}
                value={firstname}
            />
            <input 
                type="text" 
                placeholder='surname' 
                onChange={e => setSurname(e.target.value)}
                value={surname}
            />
            <input 
                type="text" 
                placeholder='email' 
                onChange={e => setEmail(e.target.value)}
                value={email}
            />
            <input 
                type="password" 
                placeholder='password'
                onChange={e => setPassword(e.target.value)}
                value={password} 
            />
            <button type="submit">Register</button>
        </form>
    </div>
  )
}

export default Register