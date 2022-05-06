import { graphql } from "msw";
import { v4 as uuidv4 } from "uuid";
import GET_PRODUCTS from "../graphql/products";
import GET_PRODUCT from "../graphql/product";

const MOCK_PRODUCTS = Array.from({ length: 20 }).map((_, i) => {
  return {
    id: uuidv4(),
    imageUrl: `https://picsum.photos/id/${i + 1}/200/300`,
    price: Math.floor(Math.random() * 10) * 10000,
    title: `상품명${i + 1}`,
    description: `상품설명${i + 1}`,
    createdAt: randomDate(new Date(2022, 4, 1), new Date()).toString(),
  };
});

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
    return res(
      ctx.data({
        product: {
          // @TODO GET_PRODUCT 작성
          name: "hi",
        },
      }),
    );
  }),
];
