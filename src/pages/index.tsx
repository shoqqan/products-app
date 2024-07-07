import React from 'react';
import {
  Route, Routes,
} from 'react-router-dom';
import { ROUTES_MAP } from '@/shared/lib/routing';
import { Products } from '@/pages/products';

const { products, editProduct, createProduct } = ROUTES_MAP;

export function Routing() {
  return (
    <Routes>
      <Route path={products.path} element={<Products />} />
      <Route path={createProduct.path} element={<div>Create</div>} />
      <Route path={editProduct.path} element={<div>Edit</div>} />
    </Routes>
  );
}
