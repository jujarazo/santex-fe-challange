import { MockedProvider } from "@apollo/client/testing";
import { render, screen, waitFor, act } from '@testing-library/react';
import { ProductList } from '../../src/components/ProductList';
import { ProductCard } from '../../src/components/ProductCard';
import { OrderProvider } from '../../src/context/OrderContext';
import { Product } from '../../src/graphql/queries';

const product = {
  id: "1",
  name: "Laptop",
  description: "Now equipped with seventh-generation Intel Core processors, Laptop is snappier than ever. From daily tasks like launching apps and opening files to more advanced computing, you can power through your day thanks to faster SSDs and Turbo Boost processing up to 3.6GHz.",
  slug: "laptop",
  createdAt: "2022-12-08T15:04:49.000Z",
  updatedAt: "2022-12-08T15:04:49.000Z",
  assets: [
    {
      id: "1",
      name: "derick-david-409858-unsplash.jpg",
      type: "IMAGE",
      source: "https://demo.vendure.io/assets/source/b6/derick-david-409858-unsplash.jpg",
    }
  ],
  variants: [
    {
      id: "1",
      price: 129900,
      stockLevel: "IN_STOCK",
    },
    {
      id: "2",
      price: 139900,
      stockLevel: "IN_STOCK",
    },
    {
      id: "3",
      price: 219900,
      stockLevel: "IN_STOCK",
    },
    {
      id: "4",
      price: 229900,
      stockLevel: "IN_STOCK",
    }
  ]
} as Product;

describe('components', () => {

  describe('product item', () => {

    it('should render component with correct element', async () => {
      act(() => {
        render(
          <MockedProvider mocks={[]} addTypename={false}>
            <OrderProvider>
              <ProductCard product={product} />
            </OrderProvider>
          </MockedProvider>
        );
      });

      expect(screen.getByTestId('product-1')).toBeInTheDocument();
    });

  });

});