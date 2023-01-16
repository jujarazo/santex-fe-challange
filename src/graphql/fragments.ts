import { gql } from '@apollo/client';

export const CORE_ASSET_FIELDS = gql`
  fragment CoreAssetFields on Asset {
    id
    name
    type
    source
  }
`;

export const CORE_VARIANT_FIELDS = gql`
  fragment CoreVariantFields on ProductVariant {
    id
    price
    stockLevel
  }
`;

export const CORE_PRODUCT_FIELDS = gql`
  ${CORE_ASSET_FIELDS}
  ${CORE_VARIANT_FIELDS}
  fragment CoreProductFields on Product {
    id
    name
    description
    slug
    customFields
    createdAt
    updatedAt
    assets {
      ...CoreAssetFields
    }
    variants {
      ...CoreVariantFields
    }
  }
`;
