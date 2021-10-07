import styled from 'styled-components';
import { Button } from './CartButton.styled';

export const Icon = styled.span`
  width: 1.35rem;
  height: 1.35rem;
  margin-right: 0.5rem;
`;

export const Badge = styled.span`
  background-color: #b94517;
  padding: 0.25rem 1rem;
  border-radius: 25px;
  margin-left: 1rem;
  font-weight: bold;

  ${Button}:hover &,
  ${Button}:active & {
    background-color: #92320c;
  }
`;
