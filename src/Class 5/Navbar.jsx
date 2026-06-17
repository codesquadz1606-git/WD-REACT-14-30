import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const cartCount=useSelector((state)=> state)
    console.log(cartCount)
  return (
    <div style={{display:"flex",justifyContent:"space-between",padding:" 10px 30px"}}>
        <h1><Link to="/">Logo</Link></h1>
        <h1><Link to="/cart">Cart</Link></h1>
    </div>
  )
}

export default Navbar
