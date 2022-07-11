import React from 'react'
import { Route, Routes } from 'react-router'
import { Home } from './Home'
import { Product } from './Product';

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/product" element={<Product/>}></Route>
      </Routes>
    </div>
  );
}

