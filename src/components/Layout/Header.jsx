import React from 'react';
import { Navbar, ImageContainer } from './Header.styled';
import mealsImage from '../../assets/meals.jpg';
import CartButton from './CartButton';
const Header = (props) => {
  return (
    <React.Fragment>
      <Navbar>
        <h1>Swaad Ghar ka</h1>
        <CartButton showCart={props.showCart} />
      </Navbar>
      <ImageContainer>
        <img src={mealsImage} alt="mealsImage" />
      </ImageContainer>
    </React.Fragment>
  );
};

export default Header;
