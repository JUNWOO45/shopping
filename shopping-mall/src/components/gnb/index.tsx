import React from "react";
import { Link } from "react-router-dom";

const GNB = () => {
  return (
    <ul className="gnb">
      <li>
        <Link to={"/"}>홈</Link>
      </li>
      <li>
        <Link to={"/products"}>제품목록</Link>
      </li>
      <li>
        <Link to={"/carts"}>장바구니</Link>
      </li>
    </ul>
  );
};

export default GNB;
