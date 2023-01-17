import {
  Button,
  Card,
  CardActions,
  CardMedia,
  Typography,
} from '@mui/material';
import styled from 'styled-components';

export const StyledCard = styled(Card)`
  max-width: 300px;
  height: 410px;
`;

export const StyledCardMedia = styled(CardMedia)`
  height: 250px;
`;

export const StyledCardTitle = styled(Typography)`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-bottom: 20px;
`;

export const StyledCardDescription = styled(Typography)`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const StyledCardActions = styled(CardActions)`
  display: flex;
  justify-content: space-between;
  padding: 16px !important;
`;

export const BuyButton = styled(Button)``;

export const RemoveButton = styled(Button)``;
