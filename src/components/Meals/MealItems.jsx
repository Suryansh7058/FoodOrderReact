import React, { useContext } from 'react';
import MealItemForm from './MealItemForm';
import { ItemList, Description, Price } from './MealItems.styled';
import CartContext from '../../store/cart-context';

const MealItems = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `\u20B9${props.price}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price, 
    });
  };
  return (
    <ItemList>
      <div>
        <h3>{props.name}</h3>
        <Description>{props.desc}</Description>
        <Price>{price}</Price>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </ItemList>
  );
};

export default MealItems;
