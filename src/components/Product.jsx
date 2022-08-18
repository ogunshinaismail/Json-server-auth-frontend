import React from 'react'
import Card from './Card'

const Product = () => {
    const products = [
        {
            name: 'Bread',
            price: 10
        },
        {
            name: 'Yam',
            price: 20
        },
        {
            name: 'Rice',
            price: 100
        },
        {
            name: 'Beans',
            price: 90
        }
    ] 


  return (
    <div className='products'>
        {products.map( product => (
            <>
            {console.log(product.name)}
            <Card name={product.name} price={Product.price} key={product.name} />
            </>
            
        ))}
    </div>
  )
}

export default Product