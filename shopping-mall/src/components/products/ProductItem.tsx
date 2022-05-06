import React from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { Product } from "../../graphql/products";
import { cartItemSelector } from "../../recoils/cart";

const ProductItem = ({
  id,
  imageUrl,
  price,
  title,
  description,
  createdAt,
}: Product) => {
  const [cartAmount, setCartAmount] = useRecoilState(cartItemSelector(id));

  const addToCart = () => {
    setCartAmount((cartAmount || 0) + 1);
  };

  return (
    <li className="product-item">
      <Link to={`${id}`}>
        <div className="product-item__title">{title}</div>
        <img className="product-item__image" src={imageUrl} />
        <div className="product-item__price">{price}</div>
        <div className="product-item__description">{description}</div>
        <div className="product-item__createdAt">{createdAt}</div>
      </Link>

      <button onClick={addToCart}>장바구니에 담기</button>
      <div>{cartAmount || 0}</div>
    </li>
  );
};

export default ProductItem;
