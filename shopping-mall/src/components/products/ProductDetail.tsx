import React from "react";
import { Product } from "../../graphql/products";

const ProductDetail = ({
  id,
  imageUrl,
  price,
  title,
  description,
  createdAt,
}: Product) => {
  return (
    <div>
      <h1>ID: {id} 제품 상세 페이지</h1>
      <div className="product-item__title">{title}</div>
      <img className="product-item__image" src={imageUrl} />
      <div className="product-item__price">{price}</div>
      <div className="product-item__description">{description}</div>
      <div className="product-item__createdAt">{createdAt}</div>
    </div>
  );
};

export default ProductDetail;
