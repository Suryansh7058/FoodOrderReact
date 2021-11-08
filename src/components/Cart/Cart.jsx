import React, { useContext, useState } from 'react';
import Modal from '../UI/Modal';
import { ButtonContainer, CartItems, Close, Order, Total } from './Cart.styled';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';
import Checkout from './Checkout';
import axios from 'axios';
import { MealsError } from '../Meals/AvailableMeals.styled';

const Cart = (props) => {
  const [isCheckOut, setIsCheckOut] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [successSubmit, setSuccessSubmit] = useState('');

  const cartCtx = useContext(CartContext);

  const totalAmount = `\u20B9${cartCtx.totalAmount}`;

  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <CartItems>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </CartItems>
  );
  const closeCart = () => {
    setIsCheckOut(false);
    props.hideCart();
  };
  const hideCheckout = () => {
    setIsCheckOut(false);
  };
  const orderClickHandler = () => {
    setIsCheckOut(true);
  };

  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true);
    try {
      await axios.post(
        'https://onlinefood-6aef0-default-rtdb.firebaseio.com/orders.json',
        {
          user: userData,
          orderedItems: cartCtx.items,
        }
      );
      setSuccessSubmit(true);
      cartCtx.clearCart();
    } catch (err) {
      setError(err.message);
    }
    setIsSubmitting(false);
  };

  if (error) {
    return (
      <MealsError>
        <h2>{error}</h2>
      </MealsError>
    );
  }

  const cartModalContent = (
    <React.Fragment>
      <div className="cart-item__display">{cartItems}</div>
      {/*  Here I added cart-item__display class inside modal to make sure that the div containing {cartItems} has overflow:auto and the remaining elements mentioned below are displayed without scrollbars hence I removed max-height property from CartItems in cart.styled.jsx and added the same property in cart-item__display class inside modal*/}
      <Total>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </Total>
      {isCheckOut && (
        <Checkout onClose={hideCheckout} onConfirm={submitOrderHandler} />
      )}

      {!isCheckOut && (
        <ButtonContainer>
          <Close onClick={closeCart}>Close</Close>
          {hasItems && <Order onClick={orderClickHandler}>Order</Order>}
        </ButtonContainer>
      )}
    </React.Fragment>
  );

  const didSubmitContent = (
    <>
      <h1 style={{ color: 'limegreen' }}>
        &#9989; Ordered Placed Successfully{' '}
      </h1>
      <p>You will get a call to confirm your order soon</p>
      <ButtonContainer>
        <Close onClick={closeCart}>Close</Close>
      </ButtonContainer>
    </>
  );

  const isSubmittingModalContent = (
    <>
      <h1 style={{ color: 'black' }}>Placing Your Order...</h1>
    </>
  );

  return (
    <Modal onBackdropClick={props.hideCart}>
      {!isSubmitting && !successSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && successSubmit && didSubmitContent}
    </Modal>
  );
};

export default Cart;
