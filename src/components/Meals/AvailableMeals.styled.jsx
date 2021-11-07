import styled from 'styled-components';

export const AvailableMealsSection = styled.section`
  max-width: 60rem;
  width: 90%;
  margin: 2rem auto;
  animation: meals-appear 1s ease-out forwards;

  & ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;

export const MealsLoading = styled.section`
  max-width: 60rem;
  width: 90%;
  margin: 2rem auto;
  text-align: center;
`;
export const MealsError = styled.section`
  max-width: 60rem;
  width: 90%;
  margin: 2rem auto;
  text-align: center;
  color: red;
`;
