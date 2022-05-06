import { TProductItem } from "../../types/productTypes";
import React from "react";

const ProductItem = ({
  category,
  description,
  id,
  image,
  price,
  rating,
  title,
}: TProductItem) => {
  return (
    <li>
      <div>{category}</div>
      <div>{description}</div>
      <img src={image} />
      <div>{price}</div>
      <div>{rating.rate}</div>
    </li>
  );
};

export default ProductItem;
