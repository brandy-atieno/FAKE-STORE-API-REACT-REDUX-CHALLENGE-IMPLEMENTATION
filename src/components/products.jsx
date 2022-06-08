import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Product from './product'

const url = 'https://fakestoreapi.com/products'

const Products = () => {
    const [products, setproducts] = useState(null)

    useEffect(() => {
      axios.get(url).then(res=> setproducts(res.data))
    }, [])
    
  return (
    <div className='products'>
        {products? products.map(product=>(<Product product={product} key={product.id}/>)): "Loading..."}
    </div>
  )
}

export default Products