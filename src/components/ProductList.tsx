import { useQuery } from '@apollo/client';
import { GET_PRODUCTS } from '../graphql/queries';
import { Container } from './styled';
import { ListContainer } from './styled/ListContainer';
import { ProductCard } from './ProductCard';

export function ProductList() {
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  if (loading) return <p data-testid="products-loading">Loading...</p>;

  if (error) return <p data-testid="products-error">Error: {error.message}</p>;

  if (!data) return <p data-testid="products-internal-error">Error</p>;

  const {
    products: { items },
  } = data;

  return (
    <Container>
      <ListContainer data-testid="products">
        {items &&
          items.map((item) => (
            <ProductCard key={`${item.name}-${item.id}`} product={item} />
          ))}
      </ListContainer>
    </Container>
  );
}
