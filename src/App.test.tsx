import { MockedProvider } from '@apollo/client/testing';
import { render, act } from '@testing-library/react';
import { ProductList } from './components/Product/List/ProductList';

describe('ProductList', () => {
  it('renders text and button', async () => {
    await act(async () => {
      render(
        <MockedProvider mocks={[]} addTypename={false}>
          <ProductList />
        </MockedProvider>
      );
      await new Promise((resolve) => setTimeout(resolve, 0));
    });
  });
});
