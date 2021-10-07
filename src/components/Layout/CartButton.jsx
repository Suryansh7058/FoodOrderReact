import React, { useContext, useEffect, useState } from 'react';
import { Fragment } from 'react';
import CartContext from '../../store/cart-context';
import CartIcon from '../Cart/CartIcon';
import { Button } from './CartButton.styled';
import { Icon, Badge } from './Icon.styled';

const CartButton = (props) => {
  const [btnHighlighted, setButtonHighlighted] = useState(false);

  const onClickHandler = () => {
    props.showCart();
  };
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  useEffect(() => {
    if (items.length === 0) {
      setButtonHighlighted(false);
      return;
    }
    const timer = setButtonHighlighted(true);

    setTimeout(() => {
      setButtonHighlighted(false);
    }, 301);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <Fragment>
      <Button onClick={onClickHandler} cartItemChanged={btnHighlighted}>
        <Icon>
          <CartIcon />
        </Icon>
        <span>Your Cart</span>
        <Badge>{numberOfCartItems}</Badge>
        {/* Icon.styled.jsx has accessed parent Button to change badge color on hover*/}
      </Button>
    </Fragment>
  );
};

export default CartButton;
