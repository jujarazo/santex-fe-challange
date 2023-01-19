import { Header } from './components/Header';
import { ProductList } from './components/Product/List/ProductList';
import { OrderProvider } from './context';

function App() {
  return (
    <OrderProvider>
      <>
        <Header></Header>
        <div>
          <ProductList></ProductList>
        </div>
      </>
    </OrderProvider>
  );
}

export default App;
