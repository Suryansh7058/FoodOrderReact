import React, { useContext } from 'react';
import Modal from '../UI/Modal';
import { ButtonContainer, CartItems, Close, Order, Total } from './Cart.styled';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';

const Cart = (props) => {
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
    props.hideCart();
  };

  //JSX
  return (
    <Modal onBackdropClick={props.hideCart}>
      <div className="cart-item__display">{cartItems}</div>
      {/*  Here I added cart-item__display class inside modal to make sure that the div containing {cartItems} has overflow:auto and the remaining elements mentioned below are displayed without scrollbars hence I removed max-height property from CartItems in cart.styled.jsx and added the same property in cart-item__display class inside modal*/}
      <Total>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </Total>
      <ButtonContainer>
        <Close onClick={closeCart}>Close</Close>
        {hasItems && <Order onClick={closeCart}>Order</Order>}
      </ButtonContainer>
    </Modal>
  );
};

export default Cart;
