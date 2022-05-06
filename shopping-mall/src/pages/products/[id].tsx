import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import ProductDetail from "../../components/products/ProductDetail";
import { fetcher, QUERY_KEYS } from "../../queryClients";
import { TProductItem } from "../../types/productTypes";

const ProductDetailPage = () => {
  const { id } = useParams();
  const { data } = useQuery<TProductItem>([QUERY_KEYS.PRODUCTS, id], () => {
    return fetcher({ method: "GET", path: `/products/${id}` });
  });

  if (!data) {
    return null;
  }

  return <ProductDetail {...data} />;
};

export default ProductDetailPage;
