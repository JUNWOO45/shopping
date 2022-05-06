import React from "react";
import { CartType } from "../../graphql/cart";

const CartItem = ({
  id,
  imageUrl,
  price,
  title,
  description,
  amount,
}: CartType) => {
  return (
    <li>
      {id} {price} {title} {amount}{" "}
    </li>
  );
};

export default CartItem;
