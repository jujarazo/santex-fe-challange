import { Button, CardActions, Typography } from '@mui/material';
import styled from 'styled-components';

export const StyledCardTitle = styled(Typography)`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const StyledCardDescription = styled(Typography)`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const StyledCardActions = styled(CardActions)`
  display: flex;
  justify-content: space-between;
`;

export const BuyButton = styled(Button)``;
