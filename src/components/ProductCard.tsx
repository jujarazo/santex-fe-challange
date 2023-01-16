import { useMutation } from '@apollo/client';
import { CardContent, CardMedia, Typography } from '@mui/material';
import { useContext } from 'react';
import OrderContext from '../context/OrderContext';
import { ADD_ITEM_TO_ORDER } from '../graphql/mutations';
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
  const { items, addToOrder, removeFromOrder } = useContext(OrderContext);
  const [addItemToOrder, { loading, error }] = useMutation(ADD_ITEM_TO_ORDER);

  const isProductInOrder = items.some((item) => item.id === id);

  const mediaSrc = assets.length ? assets[0].source : '';

  const { price, id: variantId } = variants.find(
    (variant) => variant.stockLevel === 'IN_STOCK'
  ) || { price: 0, id: '-1' };

  const formattedPrice = price
    ? new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(price)
    : '';

  const handleAddToOrder = () => {
    addItemToOrder({ variables: { productVariantId: variantId } });
    addToOrder({ id, price, name });
  };

  const handleRemoveFromOrder = () => {
    removeFromOrder(id);
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
        {error ? (
          <div>{error.message}</div>
        ) : !isProductInOrder ? (
          <BuyButton
            onClick={() => handleAddToOrder()}
            size="small"
            variant="contained"
            color="error"
            disabled={loading}
          >
            Buy
          </BuyButton>
        ) : (
          <RemoveButton onClick={() => handleRemoveFromOrder()} color="error">
            Remove
          </RemoveButton>
        )}
        <Typography>{formattedPrice}</Typography>
      </StyledCardActions>
    </StyledCard>
  );
}
