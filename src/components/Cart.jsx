import React from 'react'

const Cart = ([name, price, key]) => {
  return (
    <div key={key}>
        <h1>Cart</h1>
        <h1>{name}</h1>
        <p>{price}</p>
    </div>
  )
}

export default Cart