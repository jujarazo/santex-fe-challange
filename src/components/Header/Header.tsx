import { useContext, useMemo } from 'react';
import OrderContext from '../../context/OrderContext';
import { formatCurrencyWrapper } from '../../helpers';
import { StyledHeader, StyledHeaderContainer } from '../styled';

export function Header() {
  const { items } = useContext(OrderContext);

  // The amount of products inside of items might be too big so it is better to wrap it in a useMemo
  const orderTotal = useMemo(() => {
    // Initial value in case that no products are in the current order
    const orderInitialValue = { price: 0 };
    return items.reduce((totalAcc, item) => {
      totalAcc.price = totalAcc.price + item.price;
      return totalAcc;
    }, orderInitialValue).price;
  }, [items]);

  const orderTotalFormatted = formatCurrencyWrapper(orderTotal);

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
