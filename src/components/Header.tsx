import { useContext } from 'react';
import styled from 'styled-components';
import OrderContext from '../context/OrderContext';

const StyledHeader = styled.header`
  background: red;
  padding: 25px;
`;

const StyledHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export function Header() {
  const { items } = useContext(OrderContext);

  const orderTotal = items.reduce((totalAcc, item) => {
    totalAcc.price = totalAcc.price + item.price;
    return totalAcc;
  }).price;

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
          <div>$ {orderTotalFormatted}</div>
          <div>Products: {items.length}</div>
        </div>
      </StyledHeaderContainer>
    </StyledHeader>
  );
}
