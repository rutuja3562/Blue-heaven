import React from 'react'
import { Route, Routes } from 'react-router'
import { Cart } from './Cart';
import { Home } from './Home'
import { Product } from './Product';
import { ProductDetails } from './ProductDetails';

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </div>
  );
}

