import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Product } from '../graphql/queries';
import {
  BuyButton,
  StyledCardActions,
  StyledCardDescription,
  StyledCardTitle,
} from './Card';

interface ProductCardProps {
  product: Product;
}

export function ProductCard(props: ProductCardProps) {
  const {
    product: { name, assets, description, variants },
  } = props;
  const mediaSrc = assets.length ? assets[0].source : '';

  const price = variants.find(
    (variant) => variant.stockLevel === 'IN_STOCK'
  )?.price;

  const formattedPrice = price
    ? new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(price)
    : '';

  return (
    <Card
      sx={{
        maxWidth: 300,
        height: 410,
      }}
    >
      <CardMedia sx={{ height: 250 }} image={mediaSrc} />
      <CardContent>
        <StyledCardTitle mb="10px" variant="h5">
          {name}
        </StyledCardTitle>
        <StyledCardDescription variant="body2">
          {description}
        </StyledCardDescription>
      </CardContent>
      <StyledCardActions sx={{ padding: 2 }}>
        <BuyButton size="small" variant="contained" color="error">
          Buy
        </BuyButton>
        <Typography>{formattedPrice}</Typography>
      </StyledCardActions>
    </Card>
  );
}
