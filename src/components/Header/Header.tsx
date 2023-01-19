import { useContext } from 'react';
import OrderContext from '../../context/OrderContext';
import { StyledHeader, StyledHeaderContainer } from '../styled';

export function Header() {
  const { items } = useContext(OrderContext);

  // Initial value in case that no products are in the current order
  const orderInitialValue = { price: 0 };
  const orderTotal = items.reduce((totalAcc, item) => {
    totalAcc.price = totalAcc.price + item.price;
    return totalAcc;
  }, orderInitialValue).price;

  const orderTotalFormatted = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(orderTotal);

  return (
    <StyledHeader>
      <StyledHeaderContainer>
        <img
          src="https://santex.wpengine.com/wp-content/uploads/2019/02/logo-santex@3x.png"
          alt="logo"
        />
        <div>
          <div data-testid="header-order-total">{orderTotalFormatted}</div>
          <div data-testid="header-products">
            Products:{' '}
            <span data-testid="header-products-quantity">{items.length}</span>
          </div>
        </div>
      </StyledHeaderContainer>
    </StyledHeader>
  );
}
