// import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// import CartContext from '../CartContext';

const Nav = () => {
  // const { item } = useContext(CartContext);
  return (
    <div>
        <nav>
            <h1>Logo</h1> 
            <div>
              <p>items<span>(0)</span></p>
              <Link className='cart' to="cart">Cart</Link>
            </div>
        </nav>
    </div>
  )
}

export default Nav