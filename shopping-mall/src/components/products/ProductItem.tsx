import React from "react";
import { Link } from "react-router-dom";
import { Product } from "../../graphql/products";

const ProductItem = ({
  id,
  imageUrl,
  price,
  title,
  description,
  createdAt,
}: Product) => {
  return (
    <li className="product-item">
      <Link to={`${id}`}>
        <div className="product-item__title">{title}</div>
        <img className="product-item__image" src={imageUrl} />
        <div className="product-item__price">{price}</div>
        <div className="product-item__description">{description}</div>
        <div className="product-item__createdAt">{createdAt}</div>
      </Link>
    </li>
  );
};

export default ProductItem;
