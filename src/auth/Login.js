// import axios from 'axios'
import React, { useState, useEffect } from 'react'
// import'../../node_modules/json-server-auth'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [text, setText] = useState('');
  const [isLogin, setisLogin] = useState(false) 
  const [store, setStore] = useState(null) 
  const [productName, setProductName] = useState('');
  const [productCost, setProductCost] = useState('');
  const [productQty, setProductQty] = useState('');
  const [locationId, setLocationId] = useState('');
  const [familyId, setfamilyId] = useState('');


  const storeCollector = () => {
    let storee = JSON.parse(localStorage.getItem('login'));
    if(storee && storee.login) {
      setisLogin(true);
      setStore(store);
    };
  };

  useEffect(() => {
    storeCollector()
  }, [storeCollector])

  

  const login = async (e) => {
    e.preventDefault();

    const data = {
      email,
      password
    };

    fetch("http://localhost:8000/auth/login", {
      method: 'POST',
      headers: {
              'Content-Type': 'application/json'
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
      body: JSON.stringify(data)
    }).then((response) => {
      response.json().then((result) => {
        console.log("result:", result);
        localStorage.setItem("login", JSON.stringify({
          login: true,
          token: result.access_token
        }))
        storeCollector()
      })
    })
  }

  const post = () => {
    // const data = {
    //   productName,
    //   productCost,
    //   productQty,
    //   locationId,
    //   familyId
    // };

    const token = JSON.parse( localStorage.getItem('login') );
    console.log(token);
    // console.log(token);

    // fetch("http://localhost:8000/products", {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': `Bearer ${token.token}`
    //   },
    //   body: data,
    //   mode: 'no-cors'
    // }).then((response) => {
    //   response.json().then((result) => {
    //     console.log("result:", result);
    //   })
    // })

    fetch('http://localhost:8000/products', {
      method: 'GET',
      headers:{
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token.token}`
      }
      }).then(data => {
        return data.json();
      })
      .then(result => {
        console.log(result);
      })
    
  }


  return ( 
      <div className = 'register' >
        <h1> JWT with React </h1>  
          {
            !isLogin ?
            <form onSubmit = {login} >
              <input
                type = "text"
                placeholder = 'email'
                onChange = {
                  e => setEmail(e.target.value)
                }
              value = {email}
              />
              <input 
                type = "password"
                placeholder = 'password'
                onChange = {
                  e => setPassword(e.target.value)
                }
              value = {password}
              />
              <button type = "submit" > Login </button> 
           </form> 
           :     
           <div>
               <h1>Product Dashboard</h1>
               <input
                type = "text"
                placeholder = 'Name'
                onChange = {
                    e => setProductName(e.target.value)
                  }
                value = {productName}
                />

               <input
                type = "number"
                placeholder = 'Cost'
                onChange = {
                    e => setProductCost(e.target.value)
                  }
                value = {productCost}
                />

               <input
                type = "number"
                placeholder = 'Quantity'
                onChange = {
                    e => setProductQty(e.target.value)
                  }
                value = {productQty}
                />

               <input
                type = "number"
                placeholder = 'Location id'
                onChange = {
                    e => setLocationId(e.target.value)
                  }
                value = {locationId}
                />

               <input
                type = "number"
                placeholder = 'Family id'
                onChange = {
                    e => setfamilyId(e.target.value)
                  }
                value = {familyId}
                />

               <button onClick={() => post()}>Post</button>
           </div>
          }
    </div>
  )
}

export default Login


// {
//   :     
// <div>
//     <h1>Dashboard</h1>
//     <textarea 
//       cols="30" 
//       rows="10"
//       onChange = {
//         e => setText(e.target.value)
//       }
//     value = {text} />
//     <button onClick={() => post()}>Post</button>
// </div>
// }


// // Example POST method implementation:
    // async function postData(url, data) {
    //   // Default options are marked with *
    //   const response = await fetch(url, {
    //     method: 'POST', // *GET, POST, PUT, DELETE, etc.
    //     mode: 'cors', // no-cors, *cors, same-origin
    //     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    //     credentials: 'same-origin', // include, *same-origin, omit
    //     headers: {
    //       'Content-Type': 'application/json'
    //       // 'Content-Type': 'application/x-www-form-urlencoded',
    //     },
    //     redirect: 'follow', // manual, *follow, error
    //     referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    //     body: JSON.stringify(data) // body data type must match "Content-Type" header
    //   });
    //   return response.json(); // parses JSON response into native JavaScript objects

    // }

    // postData('http://localhost:3000/login/', data)
    //   .then((data) => {
    //     console.log(data); // JSON data parsed by `data.json()` call
    // })