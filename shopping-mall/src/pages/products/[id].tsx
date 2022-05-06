import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import ProductDetail from "../../components/products/ProductDetail";
import GET_PRODUCT from "../../graphql/product";
import { Product } from "../../graphql/products";
import { graphqlFetcher, QUERY_KEYS } from "../../queryClients";

const ProductDetailPage = () => {
  const { id } = useParams();
  const { data } = useQuery<Product>([QUERY_KEYS.PRODUCTS, id], () =>
    graphqlFetcher(GET_PRODUCT),
  );

  if (!data) {
    return null;
  }

  return <ProductDetail {...data} />;
};

export default ProductDetailPage;
