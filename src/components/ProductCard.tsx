import { CardContent, CardMedia, Typography } from '@mui/material';
import { useContext } from 'react';
import OrderContext from '../context/OrderContext';
import { Product } from '../graphql/queries';
import {
  BuyButton,
  RemoveButton,
  StyledCard,
  StyledCardActions,
  StyledCardDescription,
  StyledCardTitle,
} from './Card';

interface ProductCardProps {
  product: Product;
}

export function ProductCard(props: ProductCardProps) {
  const {
    product: { id, name, assets, description, variants },
  } = props;
  const { items, addToOrder } = useContext(OrderContext);

  const isProductInOrder = items.some((item) => item.id === id);

  const mediaSrc = assets.length ? assets[0].source : '';

  const price =
    variants.find((variant) => variant.stockLevel === 'IN_STOCK')?.price || 0;

  const formattedPrice = price
    ? new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(price)
    : '';

  const handleAddToOrder = () => {
    addToOrder({ id, price, name });
  };

  return (
    <StyledCard>
      <CardMedia sx={{ height: 250 }} image={mediaSrc} />
      <CardContent>
        <StyledCardTitle variant="h5">{name}</StyledCardTitle>
        <StyledCardDescription variant="body2">
          {description}
        </StyledCardDescription>
      </CardContent>
      <StyledCardActions sx={{ padding: 2 }}>
        {!isProductInOrder ? (
          <BuyButton
            onClick={() => handleAddToOrder()}
            size="small"
            variant="contained"
            color="error"
          >
            Buy
          </BuyButton>
        ) : (
          <RemoveButton color="error">Remove</RemoveButton>
        )}
        <Typography>{formattedPrice}</Typography>
      </StyledCardActions>
    </StyledCard>
  );
}
