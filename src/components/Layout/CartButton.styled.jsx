import styled, { css, keyframes } from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  font: inherit;
  border: none;
  background-color: #4d1601;
  color: white;
  padding: 0.75rem 3rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 25px;
  font-weight: bold;
  animation: ${(props) =>
    props.cartItemChanged
      ? css`
          ${Bump} 300ms ease-out;
        `
      : ''};
  &:hover,
  &:active {
    background-color: #2c0d00;
  }
`;

export const Bump = keyframes` 
  0% {
    transform: scale(1);
  }
  10% {
    transform: scale(0.9);
  }
  30% {
    transform: scale(1.1);
  }
  50% {
    transform: scale(1.15);
  }
  100% {
    transform: scale(1);
  }
`;
