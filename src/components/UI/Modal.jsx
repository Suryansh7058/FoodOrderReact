import React from 'react';
import ReactDOM from 'react-dom';
import { Fragment } from 'react';
import styled, { keyframes } from 'styled-components';
import { CartItems } from '../Cart/Cart.styled';

const SlideDown = keyframes`
 from {
    opacity: 0;
    transform: translateY(-3rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.75);
`;
const ModalCard = styled.div`
  position: fixed;
  top: 20vh;
  left: 5%;
  width: 90%;
  min-height: min-content;
  background-color: white;
  padding: 1rem;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 30;
  animation: ${SlideDown} 300ms ease-out forwards;
  overflow: auto;

  @media (min-width: 768px) {
    width: 40rem;
    left: calc(50% - 20rem);
  }

  & .cart-item__display {
    max-height: 20rem;
    overflow-y: scroll;
    /* overflow:auto does the same job */
  }
`;

const Modal = (props) => {
  const onClickHandler = () => {
    props.onBackdropClick();
  };

  const portalElement = document.getElementById('overlays');
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={onClickHandler} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalCard>
          <CartItems>{props.children}</CartItems>
        </ModalCard>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
