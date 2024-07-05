import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from 'react';
import { ROUTES_MAP } from '@/shared/lib/routing';

const { products, editProduct, createProduct } = ROUTES_MAP;

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Home</div>,
  },
  {
    path: products.path,
    element: <div />,
  },
  {
    path: createProduct.path,
    element: <div>Create</div>,
  },
  {
    path: editProduct.path,
    element: <div>Edit</div>,
  },
]);

export function Routing() {
  return (
    <RouterProvider router={router} />
  );
}
