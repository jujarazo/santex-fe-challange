import { gql } from '@apollo/client';

export const CORE_ASSET_FIELDS = gql`
  fragment CoreAssetFields on Product {
    id
    name
    type
    source
  }
`;

export const CORE_VARIANT_FIELDS = gql`
  fragment CoreVariantFields on Product {
    id
    price
    stockLevel
  }
`;

export const CORE_PRODUCT_FIELDS = gql`
  fragment CoreProductFields on Product {
    id
    name
    description
    slug
    customFields
    createdAt
    updatedAt
  }
`;

console.log(CORE_PRODUCT_FIELDS);
