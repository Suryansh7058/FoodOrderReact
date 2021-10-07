import styled from 'styled-components';

export const ItemList = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #ccc;

  & h3 {
    margin: 0 0 .75rem 0;

  }
`;
export const Description = styled.div`
  font-style: italic;
`;
export const Price = styled.div`
  margin-top: 0.75rem;
  font-weight: bold;
  color: #ad5502;
  font-size: 1.25rem;
`;
