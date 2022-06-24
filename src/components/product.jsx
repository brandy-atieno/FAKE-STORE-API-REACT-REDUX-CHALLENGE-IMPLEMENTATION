import React,{useState} from 'react'
import { Link } from 'react-router-dom';
const Product = ({product}) => {
 
  return (<>
 <div className='product' >
  <Link to={`/product/${product.id}`}>
        <img src={product.image} alt="" /></Link>
        <h6>{product.title}</h6>
        <p>Category: {product.category}</p>
        <small>Rate: {`${product.rating.rate}/5`}</small>
        <small className='price'>${product.price}</small>
        <button>Add to cart</button>
        <button >Close</button></div> 
   
    </>
  )
}

export default Product