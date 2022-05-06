import React from "react";
import { useQuery } from "react-query";
import ProductItem from "../../components/products/ProductItem";
import GET_PRODUCTS, { Products } from "../../graphql/products";
import { graphqlFetcher, QUERY_KEYS } from "../../queryClients";

const ProductListPage = () => {
  const { data } = useQuery<Products>(QUERY_KEYS.PRODUCTS, () =>
    graphqlFetcher(GET_PRODUCTS),
  );

  return (
    <ul className="product-list">
      {data?.products.map(productItem => (
        <ProductItem {...productItem} key={productItem.id} />
      ))}
    </ul>
  );
};

export default ProductListPage;
