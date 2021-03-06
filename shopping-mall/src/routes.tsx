import React from "react";
import GlobalLayout from "./pages/_layout";

const Index = React.lazy(() => import("./pages/index"));
const CartsIndex = React.lazy(() => import("./pages/carts/index"));
const ProductsIndex = React.lazy(() => import("./pages/products/index"));
const ProductsId = React.lazy(() => import("./pages/products/[id]"));

export const routes = [
  {
    path: "/",
    element: <GlobalLayout />,
    children: [
      { path: "/", element: <Index />, index: true },
      { path: "/carts", element: <CartsIndex />, index: true },
      { path: "/products", element: <ProductsIndex />, index: true },
      { path: "/products/:id", element: <ProductsId /> },
    ],
  },
];

export const pages = [
  { route: "/" },
  { route: "/carts" },
  { route: "/products" },
  { route: "/products/:id" },
];
