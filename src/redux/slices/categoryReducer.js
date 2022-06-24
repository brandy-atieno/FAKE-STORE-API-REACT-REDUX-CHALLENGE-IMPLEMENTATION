import { createSlice } from '@reduxjs/toolkit'
const categorySlice=createSlice({
    name:"category",
    initialState:[],
    reducers:{
    addProductsCategory:(state,{payload})=>{
    return state= payload
},
deleteProductsCategory:(state)=>{
    return state
}

}
}
)

export const{addProductsCategory,deleteProductsCategory}=categorySlice.actions
export default categorySlice.reducer
