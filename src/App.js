import React from 'react'
import './App.css';
import { Routes, Route } from "react-router-dom"
// import ContextRender from "./ContextRender";
import Shopping from './Shopping'
import Cart from './components/Cart';
import Nav from './components/Nav';
import { CartProvider } from './CartContext';
import Register from './auth/Register';
import axios from 'axios'
import Login from './auth/Login';
import Dashboard from './components/Dashboard';

axios.defaults.withCredentials = true;

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Nav />
        <Routes>
          <Route path='/' element={<Register />} /> 
          <Route path='shopping' element={<Shopping />} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='cart' element={<Cart />} />
          <Route path='login' element={<Login />} /> 
        </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
