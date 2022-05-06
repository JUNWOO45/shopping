import React from "react";
import { useQuery } from "react-query";
import ProductItem from "../../components/products/ProductItem";
import { fetcher, QUERY_KEYS } from "../../queryClients";
import { TProductItem } from "../../types/productTypes";

const ProductList = () => {
  const { data } = useQuery<TProductItem[]>(QUERY_KEYS.PRODUCTS, () => {
    return fetcher({ method: "GET", path: "/products" });
  });

  console.log("data : ", data);

  return (
    <ul>
      {data?.map(productItem => (
        <ProductItem {...productItem} key={productItem.id} />
      ))}
    </ul>
  );
};

export default ProductList;
