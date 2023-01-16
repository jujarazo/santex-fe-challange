import { useQuery } from '@apollo/client';
import { GET_PRODUCTS } from '../graphql/queries';
import { Container } from './Container';
import { ListContainer } from './ListContainer';
import { ProductCard } from './ProductCard';

export function ProductList() {
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error: {error.message}</p>;

  if (!data) return <p>Error</p>;

  const {
    products: { items },
  } = data;

  return (
    <Container>
      <ListContainer>
        {items &&
          items.map((item) => (
            <ProductCard key={`${item.name}-${item.id}`} product={item} />
          ))}
      </ListContainer>
    </Container>
  );
}
