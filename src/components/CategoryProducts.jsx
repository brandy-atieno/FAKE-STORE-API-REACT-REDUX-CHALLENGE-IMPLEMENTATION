import React, { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Product from './product'
import { addProductsCategory,deleteProductsCategory } from '../redux/slices/categoryReducer'
import { useDispatch, useSelector } from 'react-redux/es/exports'

const CategoryProducts = () => {
    const params = useParams()
    
    let {category} = params
    const dispatch=useDispatch();
     const products = useSelector(state=>state.category)
    useEffect(() => {
      dispatch(deleteProductsCategory)
      axios.get(`https://fakestoreapi.com/products/category/${category}`).then(res=> dispatch(addProductsCategory(res.data)))
      
    
    }, [category])
    console.log(category)
    
  return (
    <div className="categoryProducts">
      <h4>{ category.charAt(0).toUpperCase() + category.slice(1) }</h4>
      <div className='products'>
        {products.length? products.map(product=>(<Product key={product.id}product={product}/>)): 'Loading...'}
    </div>
    </div>
  )
}

export default CategoryProducts;