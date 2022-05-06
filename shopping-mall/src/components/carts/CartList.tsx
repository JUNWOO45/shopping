import React from "react";
import { CartType } from "../../graphql/cart";
import CartItem from "./CartItem";

const CartList = ({ cartItems }: { cartItems: CartType[] }) => {
  console.log({ cartItems });
  return (
    <>
      <h1>목록</h1>
      <ul>
        {cartItems.map(cartItem => (
          <CartItem {...cartItem} key={cartItem.id} />
        ))}
      </ul>
    </>
  );
};

export default CartList;
