import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Products from './components/products';
import ProductDetails from './components/ProductDetails';
import CategoryProducts from './components/CategoryProducts';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    
      <Router>
        <Routes>
          <Route path='/' element={<App />}>
            <Route index element={ <Products/>}/>
            <Route path='/:category' element={<CategoryProducts/>}/>
            <Route path="/product/:id"element={ <ProductDetails/>}/>
          </Route>
        </Routes>
      </Router>
    
    
  </React.StrictMode>
);
