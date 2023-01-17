import TestRenderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { Header } from '../../src/components/Header';
import { OrderProvider } from '../../src/context/OrderContext';

describe('components', () => {

  describe('header', () => {

    it('should render component correctly', () => {
      const component = TestRenderer.create(
        <OrderProvider>
          <Header/>
        </OrderProvider>
      );

      expect(component.root.findAllByType('header').length).toEqual(1);
    });

    it('should render component with correct texts', () => {
      render(
        <OrderProvider>
          <Header/>
        </OrderProvider>
      );

      expect(screen.getByTestId('header-order-total')).toHaveTextContent('$0.00');
      expect(screen.getByTestId('header-products')).toHaveTextContent('Products:');
      expect(screen.getByTestId('header-products-quantity')).toHaveTextContent('0');
    });

  });

});