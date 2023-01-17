import { gql, TypedDocumentNode } from '@apollo/client';
import { CORE_PRODUCT_FIELDS } from './fragments';

export interface GetProducts {
  products: {
    items: Product[];
  };
}

export type Product = {
  id: string;
  createdAt: string;
  updatedAt: string;
  name: string;
  description: string;
  assets: Asset[];
  variants: Variant[];
};

export type Asset = {
  id: string;
  name: string;
  source: string;
  type: string;
};

export type Variant = {
  id: string;
  price: number;
  stockLevel: string;
};

// Here we put queries. Remove next line
export const GET_PRODUCTS: TypedDocumentNode<GetProducts> = gql`
  ${CORE_PRODUCT_FIELDS}
  query GetProducts {
    products {
      items {
        ...CoreProductFields
      }
    }
  }
`;
