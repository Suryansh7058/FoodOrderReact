import React, { useState } from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';

const App = () => {
  const [activeCart, setActiveCart] = useState(false);

  const showCartHandler = () => {
    setActiveCart(true);
  };

  const hideCartHandler = () => {
    setActiveCart(false);
  };
  return (
    <CartProvider>
      {activeCart && (
        <Cart showCart={showCartHandler} hideCart={hideCartHandler} />
      )}
      <Header showCart={showCartHandler} hideCart={hideCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
};

export default App;
