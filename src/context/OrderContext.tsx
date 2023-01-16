import { createContext } from 'react';
import useStateWithStorage from '../hooks/useStateWithStorage';

export type OrderProduct = {
  id: string;
  name: string;
  price: number;
};

export type Order = OrderProduct[];

export type OrderContextType = {
  items: Order;
  addToOrder: (newProd: OrderProduct) => void;
};

const OrderContext = createContext<OrderContextType>({} as OrderContextType);

export function OrderProvider({ children }: { children: JSX.Element }) {
  const [items, setItems] = useStateWithStorage('order', []);

  const addToOrder = ({ id, name, price }: OrderProduct) => {
    setItems((prevItems: Order) => [...prevItems, { id, name, price }]);
  };

  return (
    <OrderContext.Provider value={{ items, addToOrder }}>
      {children}
    </OrderContext.Provider>
  );
}

export default OrderContext;
