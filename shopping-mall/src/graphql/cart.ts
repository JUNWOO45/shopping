import { gql } from "graphql-tag";

export type CartType = {
  id: string;
  imageUrl: string;
  price: number;
  title: string;
  description: string;
  createdAt: string;
  amount: number;
};

export const GET_CART = gql`
  query GET_CART {
    id
    imageUrl
    price
    title
    description
    createdAt
    amount
  }
`;

export const ADD_CART = gql`
  mutation ADD_CART($id: string) {
    id
    imageUrl
    price
    title
    description
    createdAt
    amounts
  }
`;
