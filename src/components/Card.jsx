import React from 'react'

const Card = (name, price) => {
  return (
    <div>
        <div className="product" key={name}>
            <div className="product-img"></div>
            <h2>{name}</h2>
            <p>${price}</p>
            <button>Add to cart</button>
        </div>
    </div>
  )
}

export default Card