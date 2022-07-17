import React from 'react'
import { Route, Routes } from 'react-router'
import { Cart } from './Cart';
import { Checkout } from './Checkout';
import { Home } from './Home'
import { Product } from './Product';
import { ProductDetails } from './ProductDetails';
import {Payment} from "./Payment"
export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment" element={<Payment />}></Route>
      </Routes>
    </div>
  );
}

