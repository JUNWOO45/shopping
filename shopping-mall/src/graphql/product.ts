import gql from "graphql-tag";

const GET_PRODUCT = gql`
  query GET_PRODUCT($id: string) {
    id
    imageUrl
    price
    title
    description
    createdAt
  }
`;

export default GET_PRODUCT;
