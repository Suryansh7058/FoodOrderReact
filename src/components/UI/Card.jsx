import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  background-color: white;
`;

const Card = (props) => {
  return <Wrapper>{props.children}</Wrapper>;
};

export default Card;
