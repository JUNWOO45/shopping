import { TProductItem } from "../../types/productTypes";
import React from "react";
import { Link } from "react-router-dom";

const ProductDetail = ({
  category,
  description,
  id,
  image,
  price,
  rating,
  title,
}: TProductItem) => {
  return (
    <div>
      <h1>제품 상세 페이지</h1>
      <div className="product-item__category">{category}</div>
      <img className="product-item__image" src={image} />
      <div className="product-item__price">{price}</div>
      <div className="product-item__reate">{rating.rate}</div>
    </div>
  );
};

export default ProductDetail;
