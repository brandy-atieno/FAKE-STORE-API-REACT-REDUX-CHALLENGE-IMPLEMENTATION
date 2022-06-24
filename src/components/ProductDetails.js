import React,{useState,useEffect} from 'react'
import {useParams}from 'react-router-dom'
import axios from "axios"
import { addProductDetail } from '../redux/slices/productdetailReducer';
import Product from './product';
import { useDispatch, useSelector } from 'react-redux';
const ProductDetails = () => {
  
  const {id}=useParams();
  
  const dispatch=useDispatch();
  const detail=useSelector(state=>state.detail)
  useEffect(() => {
    
    axios.get(`https://fakestoreapi.com/products/${id}`).then(res=>(dispatch (addProductDetail (res.data))))
    
  
  }, [])
  console.log(detail)
  
  return (
 <div className='product' >
  
        <img src={detail.image} alt="" />
        <h6>{detail.title}</h6>
        <p>Category: {detail.category}</p>
        <small>Rate: {`${detail.rating.rate}/5`}</small>
        <small className='price'>${detail.price}</small>
        </div>
   
    

    
    
  )
}

export default ProductDetails