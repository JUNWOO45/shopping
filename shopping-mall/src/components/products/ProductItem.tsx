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
    <li className="product-item">
      <div className="product-item__category">{category}</div>
      <img className="product-item__image" src={image} />
      <div className="product-item__price">{price}</div>
      <div className="product-item__reate">{rating.rate}</div>
    </li>
  );
};

export default ProductItem;
