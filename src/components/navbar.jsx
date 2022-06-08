import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
        <span>Fake store</span>
        <input type="text" placeholder='search products'/>
        <div className="cart">
           <i class="fal fa-cart-plus "></i>
           <span className='count'>0</span>
        </div>
        
    </div>
  )
}

export default Navbar