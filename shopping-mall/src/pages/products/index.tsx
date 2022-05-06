import React from "react";
import { useQuery } from "react-query";
import ProductItem from "../../components/products/ProductItem";
import { fetcher, QUERY_KEYS } from "../../queryClients";
import { TProductItem } from "../../types/productTypes";

const ProductListPage = () => {
  const { data } = useQuery<TProductItem[]>(QUERY_KEYS.PRODUCTS, () => {
    return fetcher({ method: "GET", path: "/products" });
  });

  return (
    <ul className="product-list">
      {data?.map(productItem => (
        <ProductItem {...productItem} key={productItem.id} />
      ))}
    </ul>
  );
};

export default ProductListPage;
