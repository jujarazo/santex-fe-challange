import { gql } from '@apollo/client';

export const ADD_ITEM_TO_ORDER = gql`
  mutation AddItemToOrder($productVariantId: ID!) {
    addItemToOrder(productVariantId: $productVariantId, quantity: 1) {
      __typename
    }
  }
`;
