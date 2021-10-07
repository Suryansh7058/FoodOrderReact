import styled from 'styled-components';

export const CartItems = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  overflow: auto;
`;

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: 1.5rem;
  margin: 1rem 0;
`;

export const ButtonContainer = styled.div`
  text-align: right;
`;
const Button = styled.button`
  font: inherit;
  cursor: pointer;
  border: 1px solid #8a2b06;
  padding: 0.75rem 2rem;
  border-radius: 25px;
  margin-left: 1rem;

  &:hover,
  &:active {
    background-color: #5a1a01;
    border-color: #5a1a01;
    color: white;
  }
`;
export const Close = styled(Button)`
  color: #8a2b06;
  background-color: transparent;
`;

export const Order = styled(Button)`
  background-color: #8a2b06;
  color: white;
`;
