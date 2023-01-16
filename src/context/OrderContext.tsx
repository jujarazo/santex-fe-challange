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
  removeFromOrder: (id: string) => void;
};

const OrderContext = createContext<OrderContextType>({} as OrderContextType);

export function OrderProvider({ children }: { children: JSX.Element }) {
  const [items, setItems] = useStateWithStorage('order', []);

  const addToOrder = ({ id, name, price }: OrderProduct) => {
    setItems((prevOrder: Order) => [...prevOrder, { id, name, price }]);
  };

  const removeFromOrder = (id: string) => {
    setItems((prevOrder: Order) => prevOrder.filter((item) => item.id !== id));
  };

  return (
    <OrderContext.Provider value={{ items, addToOrder, removeFromOrder }}>
      {children}
    </OrderContext.Provider>
  );
}

export default OrderContext;
