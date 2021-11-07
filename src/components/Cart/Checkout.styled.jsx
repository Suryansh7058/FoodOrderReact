import styled from 'styled-components';

export const CheckoutForm = styled.form`
  margin: 1rem 0;
  max-height: 19rem;
  overflow: auto;
`;

export const FormControl = styled.div`
  margin-bottom: 0.5rem;
  & label {
    font-weight: bold;
    margin-bottom: 0.25rem;
    display: block;
  }

  & input {
    font: inherit;
    border-width: 1px;
    border-style: solid;
    border-color: ${(props) => (props.valid ? '' : 'red')};
    border-radius: 4px;
    width: 40rem;
    line-height: 1.2;
    background-color: ${(props) =>
      props.valid ? '' : 'rgba(255, 93, 93, 0.267)'};
    max-width: 100%;
  }
`;

export const FormActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;

  & button {
    font: inherit;
    color: #5a1a01;
    cursor: pointer;
    background-color: transparent;
    border: none;
    border-radius: 25px;
    padding: 0.5rem 2rem;
  }
  & button:active {
    background-color: hsl(19.142857142857135, 100%, 93.13725490196079%);
  }

  & button:hover {
    background-color: hsl(19.142857142857135, 100%, 88.13725490196079%);
  }

  & button:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;
