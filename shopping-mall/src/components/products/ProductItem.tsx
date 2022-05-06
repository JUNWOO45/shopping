import React from "react";
import { useMutation } from "react-query";
import { Link } from "react-router-dom";
import { ADD_CART } from "../../graphql/cart";
import { Product } from "../../graphql/products";
import { graphqlFetcher } from "../../queryClients";

const ProductItem = ({
  id,
  imageUrl,
  price,
  title,
  description,
  createdAt,
}: Product) => {
  const { mutate: addToCart } = useMutation((id: string) =>
    graphqlFetcher(ADD_CART, { id }),
  );

  return (
    <li className="product-item">
      <Link to={`${id}`}>
        <div className="product-item__title">{title}</div>
        <img className="product-item__image" src={imageUrl} />
        <div className="product-item__price">{price}</div>
        <div className="product-item__description">{description}</div>
        <div className="product-item__createdAt">{createdAt}</div>
      </Link>

      <button onClick={() => addToCart(id)}>장바구니에 담기</button>
    </li>
  );
};

export default ProductItem;
