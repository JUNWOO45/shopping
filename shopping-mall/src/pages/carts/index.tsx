import React from "react";
import { useQuery } from "react-query";
import CartList from "../../components/carts/CartList";
import { CartType, GET_CART } from "../../graphql/cart";
import { graphqlFetcher, QUERY_KEYS } from "../../queryClients";

const CartsPage = () => {
  const { data } = useQuery(QUERY_KEYS.CARTS, () => graphqlFetcher(GET_CART));
  const cartItems = Object.values(data || {}) as CartType[];

  if (!cartItems?.length) {
    return <div>아이템이 없습니다.</div>;
  }

  return <CartList cartItems={cartItems} />;
};

export default CartsPage;
