import { MockedProvider } from '@apollo/client/testing';
import { render, screen, waitFor, act } from '@testing-library/react';
import { ProductList } from './ProductList';
import { OrderProvider } from '../../../context/OrderContext';

describe('components', () => {
  describe('product list', () => {
    it('should render component with error when not handle request', async () => {
      act(() => {
        render(
          <MockedProvider mocks={[]} addTypename={false}>
            <OrderProvider>
              <ProductList />
            </OrderProvider>
          </MockedProvider>
        );
      });

      expect(screen.getByTestId('products-loading')).toBeInTheDocument();

      await waitFor(() => {
        expect(screen.getByTestId('products-error')).toBeInTheDocument();
      });
    });
  });
});
