import React from 'react';
import { CartItemLi, Actions, Summary } from './CartItem.styled';

const CartItem = (props) => {
  const price = `\u20B9${props.price}`;

  return (
    <CartItemLi>
      <div>
        <h2>{props.name}</h2>
        <Summary>
          <span className="price">{price}</span>
          <span className="amount">x {props.amount}</span>
        </Summary>
      </div>
      <Actions>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </Actions>
    </CartItemLi>
  );
};

export default CartItem;
