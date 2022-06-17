import React, { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Product from './product'

const CategoryProducts = () => {
    const params = useParams()
    let {category} = params
    const [products, setproducts] = useState(null)
    useEffect(() => {
      setproducts(null)
      axios.get(`https://fakestoreapi.com/products/category/${category}`).then(res=>{setproducts(res.data)
    })
    }, [category])
    
  return (
    <div className="categoryProducts">
      <h4>{ category.charAt(0).toUpperCase() + category.slice(1) }</h4>
      <div className='products'>
        {products? products.map(product=>(<Product key={product.id}product={product}/>)): 'Loading...'}
    </div>
    </div>
  )
}

export default CategoryProducts