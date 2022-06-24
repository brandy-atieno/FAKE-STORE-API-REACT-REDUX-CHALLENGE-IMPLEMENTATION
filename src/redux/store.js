import { configureStore } from '@reduxjs/toolkit'
import  productsreducer  from './slices/productsReducer'
import categoryreducer from "./slices/categoryReducer"
import detailreducer from "./slices/productdetailReducer"

const store= configureStore({
    reducer: {
        products: productsreducer,
        category:categoryreducer,
        detail:detailreducer,
    }
})

export default store