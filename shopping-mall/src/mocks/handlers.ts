import { graphql } from "msw";
import { v4 as uuidv4 } from "uuid";
import GET_PRODUCTS from "../graphql/products";
import GET_PRODUCT from "../graphql/product";
import { ADD_CART, CartType, GET_CART } from "../graphql/cart";

const FALL_BACK_PRODUCT = {
  id: "",
  imageUrl: "https://picsum.photos/id/0/200/300",
  price: 0,
  title: "없는 상품입니다.",
  description: "다시 조회해주세요.",
  createdAt: "",
  amount: 0,
};

const MOCK_PRODUCTS = Array.from({ length: 20 }).map((_, i) => {
  return {
    id: uuidv4(),
    imageUrl: `https://picsum.photos/id/${i + 1}/200/300`,
    price: Math.floor(Math.random() * 10) * 10000,
    title: `상품명${i + 1}`,
    description: `상품설명${i + 1}`,
    createdAt: randomDate(new Date(2022, 4, 1), new Date()).toString(),
    amount: 0,
  };
});

let MOCK_CARTS: { [key: string]: CartType } = {};

function randomDate(start: Date, end: Date) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime()),
  );
}

export const handlers = [
  graphql.query(GET_PRODUCTS, (req, res, ctx) =>
    res(
      ctx.data({
        products: MOCK_PRODUCTS,
      }),
    ),
  ),
  graphql.query(GET_PRODUCT, (req, res, ctx) => {
    const product = MOCK_PRODUCTS.find(
      product => product.id === req.body?.variables?.id,
    );

    if (product) {
      return res(ctx.data(product));
    }

    return res(ctx.data(FALL_BACK_PRODUCT));
  }),
  graphql.query(GET_CART, (req, res, ctx) => res(ctx.data(MOCK_CARTS))),
  graphql.mutation(ADD_CART, (req, res, ctx) => {
    const id = req.body?.variables?.id;
    const newData = { ...MOCK_CARTS };

    if (newData[id]) {
      newData[id] = {
        ...newData[id],
        amount: (newData[id].amount || 0) + 1,
      };
    } else {
      const product = MOCK_PRODUCTS.find(
        product => product.id === req.body?.variables?.id,
      );

      if (product) {
        newData[id] = {
          ...product,
          amount: 1,
        };
      }
    }

    MOCK_CARTS = newData;

    return res(ctx.data(newData));
  }),
];
